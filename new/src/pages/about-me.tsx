import Head from 'next/head'
import Template from 'templates/about-me'

const AboutMe = () => {
  return (
    <div>
      <Head>
        <title>Sobre mim | Diego T. Fialho</title>
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

export default AboutMe
