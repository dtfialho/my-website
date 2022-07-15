const fs = require('fs')

function addPage(page) {
  const path = page
    .replace('src/pages/', '')
    .replace('.tsx', '')
    .replace('.md', '')
    .replace('posts', 'blog')

  const route = path === 'index' ? '' : path
  return `
    <url>
      <loc>${`${process.env.BASE_URL}/${route}`}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
    </url>
  `
}

import('globby').then(async ({ globby }) => {
  const posts = await globby(['posts/*.md'])
  const pages = await globby(['src/pages/*.tsx', '!src/pages/_*.tsx'])

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${posts.map(addPage).join('\n')}  
    ${pages.map(addPage).join('\n')}
    ${addPage('blog')}
    </urlset>
  `
  fs.writeFileSync('public/sitemap.xml', sitemap)
})
