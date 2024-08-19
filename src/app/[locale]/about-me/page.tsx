import { getTranslations } from 'next-intl/server'

import Template from 'templates/about-me'

export async function generateMetadata() {
  const t = await getTranslations()

  const title = `${t('AboutMe.title')} | Diego T. Fialho`
  const description = t('AboutMe.description')
  const keywords = t('AboutMe.keywords')
  const url = 'https://www.diegotfialho.dev/about-me'

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

export default function AboutMe() {
  return <Template />
}
