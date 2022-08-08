import useTranslation from 'next-translate/useTranslation'

import getAllPostsByLocale from 'lib/get-all-posts-by-locale'
import Template from 'templates/blog'
import { PostType } from 'components/post'
import Seo from 'components/seo'

type BlogProps = {
  posts: Array<PostType>
}

const Blog = ({ posts }: BlogProps) => {
  const { t } = useTranslation()
  const title = 'Blog | Diego T. Fialho'
  const description = t('blog:description')
  const url = 'https://www.diegotfialho.com.br/blog'

  return (
    <>
      <Seo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          site_name: 'Diego T. Fialho',
          url,
          title,
          description,
          images: [
            { url: 'https://www.diegotfialho.com.br/img/icon-512x512.png' }
          ]
        }}
      />

      <Template posts={posts} />
    </>
  )
}

type StaticPageProps = {
  locale: string
}

export async function getStaticProps({ locale }: StaticPageProps) {
  const posts = getAllPostsByLocale(locale)
  return {
    props: {
      posts
    }
  }
}

export default Blog
