import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const getAllPostsByLocale = (locale: string) => {
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

  return posts
}

export default getAllPostsByLocale
