import type { PropsWithChildren } from 'react'
import { getLocale } from 'next-intl/server'
import { SpeedInsights } from '@vercel/speed-insights/next'

import StyledComponentsRegistry from 'lib/styled-components-registry'
import GlobalStyles from 'styles/global'
import Analytics from 'components/analytics'

type LayoutProps = PropsWithChildren

export default async function RootLayout({ children }: LayoutProps) {
  const locale = await getLocale()

  return (
    <html lang={locale}>
      <StyledComponentsRegistry>
        <body>
          <GlobalStyles />
          <Analytics />
          <SpeedInsights />
          {children}
        </body>
      </StyledComponentsRegistry>
    </html>
  )
}
