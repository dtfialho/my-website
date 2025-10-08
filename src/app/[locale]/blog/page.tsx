import { getLocale, getTranslations } from 'next-intl/server'

import getAllPostsByLocale from 'lib/get-all-posts-by-locale'
import Template from 'templates/blog'

export async function generateMetadata() {
  const t = await getTranslations()
  const locale = await getLocale()

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

async function getPosts() {
  const locale = await getLocale()
  return getAllPostsByLocale(locale)
}

const Blog = async () => {
  const posts = await getPosts()

  return <Template posts={posts} />
}

export default Blog
