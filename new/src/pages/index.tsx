import Head from 'next/head'
import Template from 'templates/home'

const Home =  () => {
  return (
    <div>
      <Head>
        <title>Home | Diego T. Fialho</title>
        <meta
          name="description"
          content="My personal website made with Next.js"
        />
        <link rel="shortcut icon" href="/img/icon-512x512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512x512.png" />
      </Head>

      <Template />
    </div>
  )
}

export default Home
