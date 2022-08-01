import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import redirects from 'lib/post-redirects'

export function middleware({
  nextUrl: { pathname, locale },
  url
}: NextRequest) {
  if (!pathname.includes('/blog/')) {
    return
  }

  const locales = Object.keys(redirects)

  if (locales.includes(locale)) {
    const postsToRedirect = Object.keys(redirects[locale])

    for (let i = 0; i < postsToRedirect.length; i++) {
      const path = postsToRedirect[i]
      if (pathname.includes(path)) {
        return NextResponse.redirect(new URL(`${redirects[locale][path]}`, url))
      }
    }
  }
}
