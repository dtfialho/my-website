import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Diego T. Fialho</title>
        <link rel="shortcut icon" href="/img/icon-512x512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512x512.png" />
        <meta
          name="description"
          content="My personal website made with Next.js"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
