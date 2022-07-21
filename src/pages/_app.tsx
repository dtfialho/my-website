import { AppProps } from 'next/app'

import Analytics from 'components/analytics'
import GlobalStyles from 'styles/global'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Analytics />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
