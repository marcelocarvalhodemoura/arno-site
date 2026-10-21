/**
 * Endereço CSV da aba "Site" da planilha "Calendário geral Arno 2026",
 * publicada em Arquivo → Compartilhar → Publicar na Web → aba "Site" → CSV.
 *
 * Pode ser sobrescrito no build com VITE_AGENDA_CSV_URL.
 * Vazio = o site usa apenas a agenda de reserva em content/events.ts.
 */
export const agendaCsvUrl: string =
  import.meta.env.VITE_AGENDA_CSV_URL ?? "";
