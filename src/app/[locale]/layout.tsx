import type { PropsWithChildren } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'

import { LanguageSelectorProvider } from 'components/language-selector/provider'

type LayoutProps = PropsWithChildren<{
  params: Promise<{ locale: string }>
}>

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <LanguageSelectorProvider>
      <NextIntlClientProvider messages={messages}>
        {children}
      </NextIntlClientProvider>
    </LanguageSelectorProvider>
  )
}
