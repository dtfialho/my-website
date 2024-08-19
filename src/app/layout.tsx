import type { PropsWithChildren } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import StyledComponentsRegistry from 'lib/styled-components-registry'
import GlobalStyles from 'styles/global'
import { LanguageSelectorProvider } from 'components/language-selector/provider'

type LayoutProps = PropsWithChildren<{
  params: { locale: string }
}>

export default async function RootLayout({
  children,
  params: { locale = 'pt-BR' }
}: LayoutProps) {
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <StyledComponentsRegistry>
        <body>
          <LanguageSelectorProvider>
            <NextIntlClientProvider messages={messages}>
              <GlobalStyles />

              {children}
            </NextIntlClientProvider>
          </LanguageSelectorProvider>
        </body>
      </StyledComponentsRegistry>
    </html>
  )
}
