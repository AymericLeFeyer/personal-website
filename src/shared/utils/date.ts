export function formatDate(dateStr: string | null, locale = 'fr-FR'): string {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleDateString(locale, { month: 'short', year: 'numeric' })
}

export function formatRange(
  startDate: string,
  endDate: string | null,
  locale = 'fr-FR',
  presentLabel = 'Présent'
): string {
  const start = formatDate(startDate, locale)
  const end = endDate ? formatDate(endDate, locale) : presentLabel
  return `${start} – ${end}`
}

export function getYearsSince(dateStr: string): number {
  const start = new Date(dateStr)
  const now = new Date()
  let years = now.getFullYear() - start.getFullYear()
  const hasPassedAnniversary =
    now.getMonth() > start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() >= start.getDate())
  if (!hasPassedAnniversary) years--
  return years
}
