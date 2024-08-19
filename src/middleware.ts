import createMiddleware from 'next-intl/middleware'
import type { NextRequest } from 'next/server'

import postRedirects from 'lib/post-redirects'

export function middleware(request: NextRequest) {
  const { nextUrl, url, cookies } = request

  const locales = Object.keys(postRedirects)

  // if (!locales.includes(locale)) {
  //   return
  // }

  // const postsToRedirect = Object.keys(postRedirects[locale])
  // const path = postsToRedirect.find((post) => pathname.includes(post))

  // if (path) {
  //   return NextResponse.redirect(new URL(`${postRedirects[locale][path]}`, url))
  // }

  const [, locale, ...segments] = nextUrl.pathname.split('/')
  // if (locale != null && segments.join('/') === 'profile') {
  //   const usesNewProfile =
  //     (cookies.get('NEW_PROFILE')?.value || 'false') === 'true'

  //   if (usesNewProfile) {
  //     nextUrl.pathname = `/${locale}/profile/new`
  //   }
  // }

  const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale: 'pt-BR'
  })

  const response = handleI18nRouting(request)

  return response
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)', '/', '/(pt-BR|en)/:path*']
}
