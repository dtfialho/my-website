import getAllPostPaths from 'lib/get-all-post-paths'
import getPagePostContent from 'lib/get-page-post-content'

import Post, { PostProps } from 'templates/post'
import Seo, {
  TwitterProps,
  twitterDefaultProps,
  OpenGraphProps
} from 'components/seo'
import Keywords from 'components/seo/keywords'

type PostPageProps = {
  slug: string
  excerpt: string
  keywords: string
} & PostProps

const PostPage = ({
  slug,
  content,
  title: postTitle,
  keywords,
  date,
  excerpt: description,
  hero_image
}: PostPageProps) => {
  const title = `${postTitle} | Diego T. Fialho`
  const url = `https://www.diegotfialho.dev/blog/${slug}`
  const image = `https://www.diegotfialho.dev/${hero_image}`
  const twitter: TwitterProps = {
    ...twitterDefaultProps,
    image
  }
  const openGraph: OpenGraphProps = {
    site_name: 'Diego T. Fialho',
    url,
    title,
    description,
    images: [{ url: image }]
  }

  return (
    <>
      <Seo
        title={title}
        description={description}
        canonical={url}
        openGraph={openGraph}
        twitter={twitter}
      />
      <Keywords content={keywords} />
      <Post
        content={content}
        title={postTitle}
        date={date}
        hero_image={hero_image}
      />
    </>
  )
}

export default PostPage

type StaticPathsProps = {
  locales: Array<string>
}

export async function getStaticPaths({ locales }: StaticPathsProps) {
  const paths = getAllPostPaths(locales)

  return {
    paths,
    fallback: false
  }
}

type StaticProps = {
  locale: string
  params: {
    slug: string
  }
}

export async function getStaticProps({
  locale,
  params: { slug }
}: StaticProps) {
  const { content, data } = getPagePostContent(locale, slug)

  return {
    props: {
      slug,
      content,
      ...data
    }
  }
}
