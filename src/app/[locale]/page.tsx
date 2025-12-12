import { getTranslations, setRequestLocale } from 'next-intl/server'

import { SUPPORTED_LOCALES } from 'lib/constants'
import Template from 'templates/home'

type ParamsType = {
  params: Promise<{
    locale: string
  }>
}

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: ParamsType) {
  const { locale } = await params
  const t = await getTranslations()

  const title = 'Diego T. Fialho'
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

export default async function RootPage({ params }: ParamsType) {
  const { locale } = await params

  setRequestLocale(locale)

  return <Template />
}
