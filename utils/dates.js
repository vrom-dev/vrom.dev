export const dateFormatter = (date, locale = 'es-ES', options = { month: 'short', day: 'numeric' }) => {
  const intl = new Intl.DateTimeFormat(locale, options)
  return intl.format(date)
}
