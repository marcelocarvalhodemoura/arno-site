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

## Agenda automática (Google Sheets)

A página **Agenda** e o bloco "O que vem pela frente" da Início leem a aba **Site** da planilha
*Calendário geral Arno 2026*, publicada na web como CSV.

- Endereço do CSV: `src/content/agenda-source.ts` (ou `VITE_AGENDA_CSV_URL` no build).
- Colunas da aba Site: `inicio, fim, titulo, horario, descricao, local, ramo`.
- Linhas sem data válida são ignoradas; eventos que já terminaram somem sozinhos.
- Se a planilha não responder, o site usa a lista de reserva em `src/content/events.ts`.
- Cada evento tem o botão "Salvar na minha agenda" (arquivo .ics: iPhone, Android, Google, Outlook).
