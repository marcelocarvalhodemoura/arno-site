#!/usr/bin/env bash
# Sobe um único container. Os outros não são reiniciados.
# Uso: deploy/ship.sh NOME IMAGEM PORTA_HOST PORTA_CONTAINER ARQUIVO_ENV CAMINHO_HEALTH
# ARQUIVO_ENV = "-" quando o container não usa .env.
set -euo pipefail

NAME="${1:?nome do container}"
IMAGE="${2:?imagem}"
HOST_PORT="${3:?porta no host}"
CONTAINER_PORT="${4:?porta no container}"
ENV_FILE="${5:--}"
HEALTH_PATH="${6:-/}"

: "${DEPLOY_HOST:?Defina DEPLOY_HOST}"
: "${DEPLOY_USER:?Defina DEPLOY_USER}"
: "${DEPLOY_SSH_KEY:?Defina DEPLOY_SSH_KEY}"

PORT="${DEPLOY_PORT:-22}"
KEY="$HOME/.ssh/deploy_key"

install -m 700 -d ~/.ssh
printf '%s\n' "$DEPLOY_SSH_KEY" > "$KEY"
chmod 600 "$KEY"
ssh-keyscan -p "$PORT" -H "$DEPLOY_HOST" >> ~/.ssh/known_hosts

SSH=(ssh -i "$KEY" -p "$PORT" -o IdentitiesOnly=yes -o StrictHostKeyChecking=yes -o ServerAliveInterval=30)

if ! docker image inspect "$IMAGE" >/dev/null 2>&1; then
  echo "Imagem local não encontrada: $IMAGE"
  exit 1
fi

docker save "$IMAGE" | gzip -1 | "${SSH[@]}" "$DEPLOY_USER@$DEPLOY_HOST" "gunzip | docker load"

"${SSH[@]}" "$DEPLOY_USER@$DEPLOY_HOST" "bash -s" -- \
  "$NAME" "$IMAGE" "$HOST_PORT" "$CONTAINER_PORT" "$ENV_FILE" "$HEALTH_PATH" <<'EOF'
set -euo pipefail
NAME="$1"
IMAGE="$2"
HOST_PORT="$3"
CONTAINER_PORT="$4"
ENV_FILE="$5"
HEALTH_PATH="$6"

docker network inspect arno >/dev/null 2>&1 || docker network create arno

args=(
  docker run -d
  --name "$NAME"
  --network arno
  --restart unless-stopped
  -p "127.0.0.1:${HOST_PORT}:${CONTAINER_PORT}"
)
if [[ "$ENV_FILE" != "-" ]]; then
  if [[ ! -f "$ENV_FILE" ]]; then
    echo "Falta $ENV_FILE no servidor. Esse arquivo não vai no Git."
    exit 1
  fi
  args+=(--env-file "$ENV_FILE" --add-host=host.docker.internal:host-gateway -e "PORT=${CONTAINER_PORT}")
fi

docker rm -f "$NAME" >/dev/null 2>&1 || true
"${args[@]}" "$IMAGE" >/dev/null

for _ in $(seq 1 60); do
  if curl -fsS "http://127.0.0.1:${HOST_PORT}${HEALTH_PATH}" >/dev/null; then
    echo "$NAME no ar"
    exit 0
  fi
  sleep 1
done

echo "$NAME não respondeu em http://127.0.0.1:${HOST_PORT}${HEALTH_PATH}"
docker logs "$NAME" --tail 80 || true
exit 1
EOF
