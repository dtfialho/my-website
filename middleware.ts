import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import redirects from 'lib/post-redirects'

export function middleware({
  nextUrl: { pathname, locale },
  url
}: NextRequest) {
  const locales = Object.keys(redirects)

  if (!locales.includes(locale)) {
    return
  }

  const postsToRedirect = Object.keys(redirects[locale])
  const path = postsToRedirect.find((post) => pathname.includes(post))

  if (path) {
    return NextResponse.redirect(new URL(`${redirects[locale][path]}`, url))
  }
}

export const config = {
  matcher: '/blog/:path*'
}
