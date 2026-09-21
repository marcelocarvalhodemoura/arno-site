# arno-site

Site institucional do Grupo Escoteiro Arno Friedrich. React + Vite.

## Estrutura

```
src/
  app/        casca da aplicação (rotas, scroll, voltar ao topo)
  content/    dados editoriais, um arquivo por assunto
  features/   páginas e seções (home, sobre, ramos, vivência, agenda, participe, layout)
  shared/     UI, motion e estilos globais
```

O conteúdo não depende de React. As páginas só montam o que está em `content/`.

## Desenvolvimento

```bash
npm install
npm run dev
```

O servidor sobe em `http://127.0.0.1:5180`.
# arno-site
