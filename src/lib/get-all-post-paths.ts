import fs from 'fs'
import path from 'path'

type PathsType = {
  locale: string
  params: {
    slug: string
  }
}

const getAllPagePaths = (locales: string[]): PathsType[] => {
  const paths: PathsType[] = []

  locales.forEach((locale) => {
    const dir = locale === 'pt-BR' ? 'default' : locale
    const posts = fs.readdirSync(path.join('posts', dir))

    posts.forEach((post) => {
      const path = {
        params: { slug: post.replace('.md', '') },
        locale
      }
      paths.push(path)
    })
  })

  return paths
}

export default getAllPagePaths
