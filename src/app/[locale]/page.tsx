import { getTranslations, getLocale } from 'next-intl/server'

import Template from 'templates/home'

export async function generateMetadata() {
  const t = await getTranslations()
  const locale = await getLocale()

  const title = 'Home | Diego T. Fialho'
  const description = t('Home.description')
  const keywords = t('Home.keywords')
  const url = `https://www.diegotfialho.dev/${locale}`

  return {
    keywords,
    title,
    description,
    canonical: url,
    openGraph: {
      site_name: 'Diego T. Fialho',
      url,
      title,
      description,
      images: [{ url: 'https://www.diegotfialho.dev/img/icon-512x512.png' }]
    }
  }
}

export default function RootPage() {
  return <Template />
}
