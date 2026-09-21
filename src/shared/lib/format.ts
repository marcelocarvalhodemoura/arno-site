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
