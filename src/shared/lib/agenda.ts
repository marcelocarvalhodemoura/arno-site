import type { ScoutEvent } from "@/content/types";

/** Lê CSV simples (com aspas, vírgulas e quebras de linha dentro de campos). */
export function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else quoted = false;
      } else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else field += c;
  }
  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

/** Converte "24/10/2026", "24/10/26" ou "2026-10-24" em ISO. Inválido → null. */
export function toIsoDate(value: string): string | null {
  const v = value.trim();
  let y: number, m: number, d: number;
  const br = v.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2,4})$/);
  const iso = v.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (br) {
    d = +br[1];
    m = +br[2];
    y = +br[3] < 100 ? 2000 + +br[3] : +br[3];
  } else if (iso) {
    y = +iso[1];
    m = +iso[2];
    d = +iso[3];
  } else return null;
  const date = new Date(y, m - 1, d);
  if (date.getFullYear() !== y || date.getMonth() !== m - 1 || date.getDate() !== d) return null;
  return `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

export function todayIso(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

const clean = (s: string | undefined) => {
  const v = (s ?? "").trim();
  return v === "-" ? "" : v;
};

const SMALL = new Set(["a", "à", "o", "e", "de", "da", "do", "das", "dos", "na", "no", "em", "com", "para"]);

/** "ACAMPAMENTO FINAL RAMO LOBINHO" → "Acampamento Final Ramo Lobinho". Títulos com minúsculas ficam como estão. */
export function tidyTitle(title: string): string {
  if (title !== title.toUpperCase() || !/[A-ZÀ-Ú]{4}/.test(title)) return title;
  return title
    .toLowerCase()
    .split(/(\s+)/)
    .map((w, i) => (i > 0 && SMALL.has(w) ? w : w.replace(/^([^\p{L}]*)(\p{L})/u, (_, p: string, c: string) => p + c.toUpperCase())))
    .join("");
}

function tagFromBranch(ramo: string): string {
  const r = ramo.toLowerCase();
  if (!r || r.includes("todos")) return "Todos os ramos";
  if (r.includes("lobinho")) return "Ramo Lobinho";
  if (r.includes("escoteiro")) return "Ramo Escoteiro";
  if (r.includes("sênior") || r.includes("senior")) return "Ramo Sênior";
  if (r.includes("pioneiro")) return "Ramo Pioneiro";
  if (r.includes("adulto")) return "Adultos";
  return ramo;
}

/**
 * Colunas esperadas na aba "Site" (a ordem pode variar; o cabeçalho manda):
 * inicio, fim, titulo, horario, descricao, local, ramo
 */
export function eventsFromCsv(text: string): ScoutEvent[] {
  const [header, ...rows] = parseCsv(text);
  if (!header) return [];
  const col = (name: string) =>
    header.findIndex((h) => h.trim().toLowerCase() === name);
  const idx = {
    inicio: col("inicio"),
    fim: col("fim"),
    titulo: col("titulo"),
    horario: col("horario"),
    descricao: col("descricao"),
    local: col("local"),
    ramo: col("ramo"),
  };
  if (idx.inicio < 0 || idx.titulo < 0) return [];

  const events: ScoutEvent[] = [];
  for (const row of rows) {
    const date = toIsoDate(row[idx.inicio] ?? "");
    const title = tidyTitle(clean(row[idx.titulo]));
    if (!date || !title) continue; // linha incompleta ou data digitada errado: ignora
    const end = idx.fim >= 0 ? toIsoDate(row[idx.fim] ?? "") : null;
    events.push({
      id: `${date}-${title}`,
      date,
      endDate: end && end > date ? end : undefined,
      title,
      time: clean(row[idx.horario]) || undefined,
      description: clean(row[idx.descricao]) || undefined,
      location: clean(row[idx.local]) || undefined,
      tag: tagFromBranch(clean(row[idx.ramo])),
    });
  }
  return events;
}

/** Só o que ainda não terminou, em ordem de data. */
export function upcoming(events: ScoutEvent[], today = todayIso()): ScoutEvent[] {
  return events
    .filter((e) => (e.endDate ?? e.date) >= today)
    .sort((a, b) => a.date.localeCompare(b.date) || a.title.localeCompare(b.title));
}

/* ---------- Arquivo .ics ("Salvar na minha agenda") ---------- */

const icsText = (s: string) =>
  s.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");

const compact = (iso: string) => iso.replace(/-/g, "");

function nextDay(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const dt = new Date(y, m - 1, d + 1);
  return `${dt.getFullYear()}${String(dt.getMonth() + 1).padStart(2, "0")}${String(dt.getDate()).padStart(2, "0")}`;
}

export function eventIcs(event: ScoutEvent, defaultLocation: string): string {
  const hours = event.time?.match(/(\d{1,2})[:h](\d{2}).*?(\d{1,2})[:h](\d{2})/);
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Grupo Escoteiro Arno Friedrich//Agenda//PT-BR",
    "BEGIN:VEVENT",
    `UID:${compact(event.date)}-${encodeURIComponent(event.title).slice(0, 40)}@arnofriedrich.org.br`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").split(".")[0]}Z`,
  ];
  if (hours && !event.endDate) {
    const hhmm = (h: string, m: string) => `${h.padStart(2, "0")}${m}00`;
    lines.push(
      `DTSTART;TZID=America/Sao_Paulo:${compact(event.date)}T${hhmm(hours[1], hours[2])}`,
      `DTEND;TZID=America/Sao_Paulo:${compact(event.date)}T${hhmm(hours[3], hours[4])}`,
    );
  } else {
    lines.push(
      `DTSTART;VALUE=DATE:${compact(event.date)}`,
      `DTEND;VALUE=DATE:${nextDay(event.endDate ?? event.date)}`,
    );
  }
  lines.push(
    `SUMMARY:${icsText(event.title)}`,
    `LOCATION:${icsText(event.location ?? defaultLocation)}`,
  );
  const desc = [event.description, event.time].filter(Boolean).join("\n");
  if (desc) lines.push(`DESCRIPTION:${icsText(desc)}`);
  lines.push("END:VEVENT", "END:VCALENDAR");
  return lines.join("\r\n");
}

export function downloadIcs(event: ScoutEvent, defaultLocation: string) {
  const blob = new Blob([eventIcs(event, defaultLocation)], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${event.date}-${event.title.toLowerCase().normalize("NFD").replace(/[^\w]+/g, "-").slice(0, 40)}.ics`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
