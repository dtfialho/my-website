import createMiddleware from 'next-intl/middleware'
import type { NextRequest } from 'next/server'

import {
  supportedLocales,
  postRedirects,
  generalRedirects
} from 'lib/redirects'
import { NextResponse } from 'next/server'

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
    locales: supportedLocales,
    defaultLocale: 'pt-BR'
  })

  const response = handleI18nRouting(request)

  return response
}

export const config = {
  matcher: ['/((?!img|_next).*)', '/', '/(pt-BR|en)']
}
