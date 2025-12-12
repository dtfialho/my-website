import { getTranslations, setRequestLocale } from 'next-intl/server'

import { SUPPORTED_LOCALES } from 'lib/constants'
import getAllPostsByLocale from 'lib/get-all-posts-by-locale'
import Template from 'templates/blog'

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

  const title = 'Blog | Diego T. Fialho'
  const description = t('Blog.description')
  const keywords = t('Blog.keywords')
  const url = `https://www.diegotfialho.dev/${locale}/blog`

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

const Blog = async ({ params }: ParamsType) => {
  const { locale } = await params

  setRequestLocale(locale)

  const posts = getAllPostsByLocale(locale)

  return <Template posts={posts} locale={locale} />
}

export default Blog
