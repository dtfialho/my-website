const fs = require('fs')

function replace(page) {
  return page
    .replace('src/pages/', '')
    .replace('.tsx', '')
    .replace('.md', '')
    .replace('posts', 'blog')
    .replace(/\/default|\/en/, '')
}

function addPage(page, robots) {
  const route = replace(page)
  const url = route === 'index' ? '' : route
  const locale = page.match(/\/en/) ? '/en' : ''

  if (robots) {
    return `Allow: ${locale}/${url}`
  }

  return `
    <url>
      <loc>${`${process.env.BASE_URL}${locale}/${url}`}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
    </url>
  `
}

function createSiteMap(urls) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map((url) => addPage(url)).join('\n')}
    </urlset>
  `
  fs.writeFileSync('public/sitemap.xml', sitemap)
}

function createRobots(urls) {
  const robots = `User-Agent: *\n${urls
    .map((url) => addPage(url, true))
    .join('\n')}`

  fs.writeFileSync('public/robots.txt', robots)
}

if (process.env.NODE_ENV === 'production') {
  import('globby').then(async ({ globby }) => {
    const ptBrPosts = await globby(['posts/default/*.md'])
    const enPosts = await globby(['posts/en/*.md'])
    const urls = [
      ...ptBrPosts,
      ...enPosts,
      '',
      'en',
      'blog',
      'en/blog',
      'about-me',
      'en/about-me'
    ]

    createSiteMap(urls)
    createRobots(urls)
  })
}
