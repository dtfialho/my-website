import type { PropsWithChildren } from 'react'
import { getLocale } from 'next-intl/server'

import StyledComponentsRegistry from 'lib/styled-components-registry'
import GlobalStyles from 'styles/global'

type LayoutProps = PropsWithChildren

export default async function RootLayout({ children }: LayoutProps) {
  const locale = await getLocale()

  return (
    <html lang={locale}>
      <StyledComponentsRegistry>
        <body>
          <GlobalStyles />
          {children}
        </body>
      </StyledComponentsRegistry>
    </html>
  )
}
