import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Diego T. Fialho - Home Page</title>
        <meta
          name="description"
          content="My personal website made with Next.js"
        />
        <link rel="shortcut icon" href="/img/icon-512x512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512x512.png" />
      </Head>

      <main>
        <h1>Diego T. Fialho - Home Page</h1>
      </main>

      <footer>
        <p>My Footer</p>
      </footer>
    </div>
  )
}
