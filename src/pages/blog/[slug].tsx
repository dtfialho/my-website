import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Post, { PostProps } from 'templates/post'
import Seo, {
  TwitterProps,
  twitterDefaultProps,
  OpenGraphProps
} from 'components/seo'

type PostPageProps = {
  slug: string
  excerpt: string
} & PostProps

const PostPage = ({
  slug,
  content,
  title,
  date,
  excerpt: description,
  hero_image
}: PostPageProps) => {
  const url = `https://www.diegotfialho.com.br/blog/${slug}`
  const image = `https://www.diegotfialho.com.br/${hero_image}`
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
      <Post
        content={content}
        title={title}
        date={date}
        hero_image={hero_image}
      />
    </>
  )
}

export default PostPage

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))
  const paths = files.map((filename) => ({
    params: { slug: filename.replace('.md', '') }
  }))

  return {
    paths,
    fallback: false
  }
}

type StaticProps = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params: { slug } }: StaticProps) {
  const filename = `${slug}.md`
  const markdown = fs.readFileSync(path.join('posts', filename), 'utf-8')
  const { data, content } = matter(markdown)

  return {
    props: {
      slug,
      content,
      ...data
    }
  }
}
