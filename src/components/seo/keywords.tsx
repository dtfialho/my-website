import Head from 'next/head'

export type KeywordsProps = {
  content: string
}

const Keywords = ({ content }: KeywordsProps) => (
  <Head>
    <meta name="keywords" content={content} />
  </Head>
)

export default Keywords
