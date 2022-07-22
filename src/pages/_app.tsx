import { AppProps } from 'next/app'

import { LanguageSelectorProvider } from 'components/language-selector/provider'
import LanguageSelectorModal from 'components/language-selector/modal'
import Analytics from 'components/analytics'
import GlobalStyles from 'styles/global'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <LanguageSelectorProvider>
      <Analytics />
      <GlobalStyles />
      <Component {...pageProps} />
      <LanguageSelectorModal />
    </LanguageSelectorProvider>
  )
}

export default App
