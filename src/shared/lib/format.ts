export function eventDateParts(iso: string) {
  const date = new Date(`${iso}T12:00:00`);
  return {
    day: date.getDate(),
    month: date.toLocaleDateString("pt-BR", { month: "short" }),
  };
}

export function mapEmbedUrl(query: string) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
}

/** "24 out." · "20 a 22 nov." · "31 out. a 2 nov." */
export function eventRangeLabel(start: string, end?: string) {
  const a = eventDateParts(start);
  if (!end) return `${a.day} ${a.month}`;
  const b = eventDateParts(end);
  return a.month === b.month ? `${a.day} a ${b.day} ${b.month}` : `${a.day} ${a.month} a ${b.day} ${b.month}`;
}
