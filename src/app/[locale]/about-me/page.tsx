import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

import { SUPPORTED_LOCALES } from 'lib/constants'
import Template from 'templates/about-me'

type ParamsType = {
  params: {
    locale: string
  }
}

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: ParamsType) {
  const { locale } = params
  const t = await getTranslations()

  const title = `${t('AboutMe.title')} | Diego T. Fialho`
  const description = t('AboutMe.description')
  const keywords = t('AboutMe.keywords')
  const url = `https://www.diegotfialho.dev/${locale}/about-me`

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

export default async function AboutMe({ params }: ParamsType) {
  const { locale } = params

  unstable_setRequestLocale(locale)

  return <Template />
}
