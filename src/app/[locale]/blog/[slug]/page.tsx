import { setRequestLocale } from 'next-intl/server'

import getAllPostPaths from 'lib/get-all-post-paths'
import getPagePostContent from 'lib/get-page-post-content'

import Post from 'templates/post'

type ParamsType = {
  params: Promise<{
    locale: string
    slug: string
  }>
}

export async function generateStaticParams() {
  return getAllPostPaths()
}

export async function generateMetadata({ params }: ParamsType) {
  const { slug, locale } = await params

  const {
    data: { title: postTitle, description, keywords, hero_image }
  } = getPagePostContent(locale, slug)

  const title = `${postTitle} | Diego T. Fialho`
  const url = `https://www.diegotfialho.dev/blog/${slug}`
  const image = `https://www.diegotfialho.dev/${hero_image}`
  const twitter: TwitterProps = {
    site: '@dtfialho',
    cardType: 'summary_large_image',
    image
  }
  const openGraph: OpenGraphProps = {
    site_name: 'Diego T. Fialho',
    url,
    title,
    description,
    images: [{ url: image }]
  }

  return {
    keywords,
    title,
    description,
    canonical: url,
    openGraph,
    twitter
  }
}

const PostPage = async ({ params }: ParamsType) => {
  const { slug, locale } = await params

  setRequestLocale(locale)

  const {
    content,
    data: { title: postTitle, date, hero_image }
  } = getPagePostContent(locale, slug)

  return (
    <Post
      content={content}
      title={postTitle}
      date={date}
      hero_image={hero_image}
      locale={locale}
    />
  )
}

export default PostPage
