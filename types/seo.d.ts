type TwitterProps = {
  site: string
  image: string
  cardType: string
}

type OpenGraphProps = {
  url: string
  title: string
  description: string
  images: Array<{ url: string }>
  site_name: string
}
