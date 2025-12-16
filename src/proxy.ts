import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'

import { SUPPORTED_LOCALES } from 'lib/constants'
import { generalRedirects } from 'lib/redirects'

export default async function proxy(request: NextRequest) {
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

  // const isPostRedirect = segments[0] === 'blog' && !!segments[1]

  // if (isPostRedirect && postRedirects[locale]?.[segments[1]]) {
  //   return NextResponse.redirect(
  //     new URL(
  //       `/${locale}/blog/${postRedirects[locale][segments[1]]}`,
  //       request.nextUrl.origin
  //     )
  //   )
  // } else if (isPostRedirect && !postRedirects[locale]?.[segments[1]]) {
  //   return NextResponse.redirect(
  //     new URL(`/${locale}/not-found`, request.nextUrl.origin)
  //   )
  // }

  const handleI18nRouting = createMiddleware({
    locales: SUPPORTED_LOCALES,
    defaultLocale: 'pt-BR'
  })

  const response = handleI18nRouting(request)

  return response
}

export const config = {
  matcher: [
    '/((?!img|_next|api|favicon|sitemap|robots|googlefb3413f416380407).*)',
    '/',
    '/(pt-BR|en)'
  ]
}
