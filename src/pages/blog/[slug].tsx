import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Post from 'templates/post'

const PostPage = ({ content }) => <Post content={content} />

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

export async function getStaticProps({ params: { slug } }) {
  const filename = `${slug}.md`
  const markdown = fs.readFileSync(path.join('posts', filename), 'utf-8')
  const { data, content } = matter(markdown)

  return {
    props: {
      data,
      content
    }
  }
}
