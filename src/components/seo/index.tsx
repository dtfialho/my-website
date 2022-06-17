import { NextSeo } from 'next-seo'

export type TwitterProps = {
  site: string
  image: string
  cardType: string
}

export const twitterDefaultProps: TwitterProps = {
  site: '@dtfialho',
  image: 'https://www.diegotfialho.com.br/icon-512x512.png',
  cardType: 'summary_large_image'
}

export type OpenGraphProps = {
  url: string
  title: string
  description: string
  images: Array<{ url: string }>
  site_name: string
}

export type SeoProps = {
  title: string
  description: string
  canonical: string
  openGraph: OpenGraphProps
  twitter?: TwitterProps
}

const Seo = ({
  title,
  description,
  canonical,
  openGraph,
  twitter = twitterDefaultProps
}: SeoProps) => (
  <NextSeo
    title={title}
    description={description}
    canonical={canonical}
    openGraph={openGraph}
    twitter={twitter}
    additionalLinkTags={[
      {
        rel: 'shortcut icon',
        href: '/img/icon-512x512.png'
      },
      {
        rel: 'apple-touch-icon',
        href: '/img/icon-512x512.png'
      }
    ]}
  />
)

export default Seo
