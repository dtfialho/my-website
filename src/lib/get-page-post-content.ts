import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const getPagePostContent = (locale: string, slug: string) => {
  try {
    const dir = locale === 'pt-BR' ? 'default' : locale
    const filename = `${slug}.md`
    const markdown = fs.readFileSync(path.join('posts', dir, filename), 'utf-8')
    const { data, content } = matter(markdown)

    return {
      data,
      content
    }
  } catch (error) {
    return null
  }
}

export default getPagePostContent
