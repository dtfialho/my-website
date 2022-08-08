import useTranslation from 'next-translate/useTranslation'

import Template from 'templates/home'
import Seo from 'components/seo'

const Home = () => {
  const { t } = useTranslation()
  const title = 'Home | Diego T. Fialho'
  const description = t('home:description')
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
