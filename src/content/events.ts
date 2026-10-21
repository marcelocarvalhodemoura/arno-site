import type { ScoutEvent } from "@/content/types";

/**
 * Agenda de RESERVA. O site mostra a aba "Site" da planilha
 * "Calendário geral Arno 2026" (ver content/agenda-source.ts) e só usa esta
 * lista se a planilha não estiver configurada ou não responder.
 * Eventos que já passaram são escondidos automaticamente.
 *
 * Conteúdo copiado da aba "Calendário Arno 2026" em 19/10/2026 — só o que
 * está na planilha, sem horários ou descrições inventados.
 */
export const events: ScoutEvent[] = [
  {
    id: "2026-10-24-aniversario",
    date: "2026-10-24",
    title: "Atividade especial: Aniversário do Grupo",
    tag: "Todos os ramos",
  },
  {
    id: "2026-11-07-ecologica",
    date: "2026-11-07",
    title: "Atividade ecológica (limpeza urbana)",
    tag: "Ramo Sênior",
  },
  {
    id: "2026-11-07-acampamento-lobinho",
    date: "2026-11-07",
    endDate: "2026-11-08",
    title: "Acampamento final do Ramo Lobinho",
    location: "Arroio dos Ratos · RS",
    tag: "Ramo Lobinho",
  },
  {
    id: "2026-11-28-sorvete",
    date: "2026-11-28",
    title: "Festa do Sorvete",
    tag: "Ramo Pioneiro",
  },
  {
    id: "2026-12-05-toboarno",
    date: "2026-12-05",
    title: "Toboarno e encerramento dos jovens",
    tag: "Todos os ramos",
  },
];
