import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'

import { SUPPORTED_LOCALES } from 'lib/constants'
import { generalRedirects, postRedirects } from 'lib/redirects'

export default async function proxy(request: NextRequest) {
  const [, locale, ...segments] = request.nextUrl.pathname.split('/')

  try {
    if (
      locale != null &&
      segments.length &&
      generalRedirects[locale][segments[0]]
    ) {
      return NextResponse.redirect(
        new URL(
          `/${locale}/${generalRedirects[locale][segments[0]]}`,
          request.nextUrl.origin
        )
      )
    }
  } catch (error) {
    console.warn(error)
  }

  const isBlogPostPath = segments[0] === 'blog' && Boolean(segments[1])
  const canonicalPostSlug = isBlogPostPath
    ? postRedirects[locale]?.[segments[1]]
    : undefined

  if (canonicalPostSlug) {
    return NextResponse.redirect(
      new URL(`/${locale}/blog/${canonicalPostSlug}`, request.nextUrl.origin)
    )
  }

  const handleI18nRouting = createMiddleware({
    locales: SUPPORTED_LOCALES,
    defaultLocale: 'pt-BR'
  })

  const response = handleI18nRouting(request)

  return response
}

export const config = {
  matcher: [
    '/((?!img|_next|api|favicon|sitemap|robots|googlefb3413f416380407|globals).*)',
    '/',
    '/(pt-BR|en)'
  ]
}
