import Template from 'templates/about-me'
import Seo from 'components/seo'

const AboutMe = () => {
  const title = 'Sobre mim | Diego T. Fialho'
  const description = 'Um pouquinho sobre mim e o que faço.'
  const url = 'https://www.diegotfialho.com.br/about-me'

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

export default AboutMe
