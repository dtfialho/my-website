import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

import getAllPostsByLocale from 'lib/get-all-posts-by-locale'
import Template from 'templates/blog'

type ParamsType = {
  params: {
    locale: string
  }
}

export async function generateMetadata({ params }: ParamsType) {
  const { locale } = params
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

type BlogProps = {
  params: {
    locale: string
  }
}

const Blog = async ({ params }: BlogProps) => {
  const { locale } = params

  unstable_setRequestLocale(locale)

  const posts = getAllPostsByLocale(locale)

  return <Template posts={posts} locale={locale} />
}

export default Blog
