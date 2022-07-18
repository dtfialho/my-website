const fs = require('fs')

function replace(page) {
  return page
    .replace('src/pages/', '')
    .replace('.tsx', '')
    .replace('.md', '')
    .replace('posts', 'blog')
}

function addPage(page, robots) {
  const route = replace(page)
  const url = route === 'index' ? '' : route

  if (robots) {
    return `Allow: /${url}`
  }

  return `
    <url>
      <loc>${`${process.env.BASE_URL}/${url}`}</loc>
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

import('globby').then(async ({ globby }) => {
  const posts = await globby(['posts/*.md'])
  const pages = await globby(['src/pages/*.tsx', '!src/pages/_*.tsx'])
  const urls = [...posts, ...pages, 'blog']

  createSiteMap(urls)
  createRobots(urls)
})
