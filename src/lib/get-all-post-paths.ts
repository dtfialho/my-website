import fs from 'fs'
import path from 'path'

import { DEFAULT_LOCALE } from 'lib/constants'
import { supportedLocales } from './redirects'

type PathsType = {
  locale: string
  slug: string
}

const getAllPagePaths = (): PathsType[] => {
  const locales = supportedLocales
  const paths: PathsType[] = []

  locales.forEach((locale) => {
    const dir = locale === DEFAULT_LOCALE ? 'default' : locale
    const posts = fs.readdirSync(path.join('posts', dir))

    posts.forEach((post) => {
      const path: PathsType = {
        locale,
        slug: post.replace('.md', '')
      }
      paths.push(path)
    })
  })

  return paths
}

export default getAllPagePaths
