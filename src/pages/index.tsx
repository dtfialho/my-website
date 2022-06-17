import Template from 'templates/home'
import Seo from 'components/seo'

const Home = () => {
  const title = 'Home | Diego T. Fialho'
  const description = 'Meu site feito com Next.js'
  const url = 'https://www.diegotfialho.com.br'

  return (
    <>
      <Seo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          site_name: 'Diego T. Fialho',
          url,
          title,
          description,
          images: [{ url: 'https://www.diegotfialho.com.br/icon-512x512.png' }]
        }}
      />

      <Template />
    </>
  )
}

export default Home
