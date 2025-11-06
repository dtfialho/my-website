export function getFileTranslations(locale: string, key: string): string {
  const [group, prop] = key.split('.')
  const data = require(`messages/${locale}.json`)
  return data[group][prop]
}
