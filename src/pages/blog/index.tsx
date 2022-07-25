import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Template from 'templates/blog'
import { PostType } from 'components/post'
import Seo from 'components/seo'

type BlogProps = {
  posts: Array<PostType>
}

const Blog = ({ posts }: BlogProps) => {
  const title = 'Blog | Diego T. Fialho'
  const description = 'Aqui tem alguns conteúdos sobre programação e front-end.'
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
          images: [{ url: 'https://www.diegotfialho.com.br/icon-512x512.png' }]
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
  const dir = locale === 'pt-BR' ? 'default' : locale
  const postsFolder = path.join('posts', dir)
  const files = fs.readdirSync(postsFolder)
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')
    const filePath = path.join('posts', dir, filename)
    const markdown = fs.readFileSync(filePath)
    const { data } = matter(markdown)

    return {
      slug,
      ...data
    }
  })

  return {
    props: {
      posts
    }
  }
}

export default Blog
