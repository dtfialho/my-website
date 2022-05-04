import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

type PostType = {
  slug: string,
  author: string,
  date: string,
  hero_image: string,
  title: string
}

type IndexProps = {
  posts: Array<PostType>
}

const Index = ({ posts }: IndexProps) => {
  console.log(posts)

  return <div>Hello!</div>
}

export async function getStaticProps() {
  const postsFolder = path.join('posts')
  const files = fs.readdirSync(postsFolder)
  const posts = files.map(filename => {
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
