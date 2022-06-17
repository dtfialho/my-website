import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Post, { PostProps } from 'templates/post'

const PostPage = ({ content, title, date, hero_image }: PostProps) => (
  <Post content={content} title={title} date={date} hero_image={hero_image} />
)

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
      content,
      ...data
    }
  }
}
