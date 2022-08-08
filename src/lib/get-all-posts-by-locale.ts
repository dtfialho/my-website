import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import compareDesc from 'date-fns/compareDesc'

const getAllPostsByLocale = (locale: string) => {
  const dir = locale === 'pt-BR' ? 'default' : locale
  const postsFolder = path.join('posts', dir)
  const files = fs.readdirSync(postsFolder)

  const posts = files
    .map((filename) => {
      const slug = filename.replace('.md', '')
      const filePath = path.join('posts', dir, filename)
      const markdown = fs.readFileSync(filePath)
      const { data } = matter(markdown)

      return {
        slug,
        date: '',
        ...data
      }
    })
    .sort((first, second) => {
      const firstDate = new Date(first.date)
      const secondDate = new Date(second.date)
      return compareDesc(firstDate, secondDate)
    })

  return posts
}

export default getAllPostsByLocale
