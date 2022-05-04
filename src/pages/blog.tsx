import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Template from 'templates/blog'
import { PostType } from 'components/post'

type IndexProps = {
  posts: Array<PostType>
}

const Index = ({ posts }: IndexProps) => <Template posts={posts} />

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
