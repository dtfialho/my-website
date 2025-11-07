import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'

import { SUPPORTED_LOCALES } from 'lib/constants'
import { postRedirects, generalRedirects } from 'lib/redirects'

export default async function middleware(request: NextRequest) {
  const [, locale, ...segments] = request.nextUrl.pathname.split('/')

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

  const handleI18nRouting = createMiddleware({
    locales: SUPPORTED_LOCALES,
    defaultLocale: 'pt-BR'
  })

  const response = handleI18nRouting(request)

  return response
}

export const config = {
  matcher: ['/((?!img|_next|api|favicon|sitemap|robots).*)', '/', '/(pt-BR|en)']
}
