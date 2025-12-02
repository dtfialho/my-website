import type { MetadataRoute } from 'next'

import { SUPPORTED_LOCALES } from 'lib/constants'
import getAllPostPaths from 'lib/get-all-post-paths'

const BASE_URL = 'https://www.diegotfialho.dev'

export default function sitemap(): MetadataRoute.Sitemap {
  const fixedPaths: MetadataRoute.Sitemap = []

  SUPPORTED_LOCALES.forEach((locale) => {
    fixedPaths.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 1
    })
    fixedPaths.push({
      url: `${BASE_URL}/${locale}/${locale === 'pt-BR' ? 'sobre-mim' : 'about-me'}`,
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.8
    })
    fixedPaths.push({
      url: `${BASE_URL}/${locale}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5
    })
  })

  const postPaths = getAllPostPaths()

  const dynamicPaths: MetadataRoute.Sitemap = []

  postPaths.forEach((post) => {
    dynamicPaths.push({
      url: `${BASE_URL}/${post.locale}/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 1
    })
  })

  return [...fixedPaths, ...dynamicPaths]
}
