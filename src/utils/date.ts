const MONTHS_FR = ['jan', 'fév', 'mar', 'avr', 'mai', 'juin', 'juil', 'août', 'sep', 'oct', 'nov', 'déc'];

export function formatDate(dateStr: string): string {
  if (dateStr === 'Present') return 'Présent';
  const [year, month] = dateStr.split('-');
  if (month) return `${MONTHS_FR[parseInt(month) - 1]}. ${year}`;
  return year;
}

export function formatRange(start: string, end: string): string {
  return `${formatDate(start)} – ${formatDate(end)}`;
}
