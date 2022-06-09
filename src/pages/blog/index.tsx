import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'

import Template from 'templates/blog'
import { PostType } from 'components/post'

type IndexProps = {
  posts: Array<PostType>
}

const Index = ({ posts }: IndexProps) => (
  <>
    <Head>
      <title>Blog | Diego T. Fialho</title>
      <meta
        name="description"
        content="My personal website made with Next.js"
      />
      <link rel="shortcut icon" href="/img/icon-512x512.png" />
      <link rel="apple-touch-icon" href="/img/icon-512x512.png" />
    </Head>
    <Template posts={posts} />
  </>
)

export async function getStaticProps() {
  const postsFolder = path.join('posts')
  const files = fs.readdirSync(postsFolder)
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')
    const filePath = path.join('posts', filename)
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

export default Index
