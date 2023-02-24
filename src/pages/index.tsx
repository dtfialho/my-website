import useTranslation from 'next-translate/useTranslation'

import Template from 'templates/home'
import Seo from 'components/seo'
import Keywords from 'components/seo/keywords'

const Home = () => {
  const { t } = useTranslation()

  const title = 'Home | Diego T. Fialho'
  const description = t('home:description')
  const keywords = t('home:keywords')
  const url = 'https://www.diegotfialho.dev'

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
          images: [{ url: 'https://www.diegotfialho.dev/img/icon-512x512.png' }]
        }}
      />
      <Keywords content={keywords} />

      <Template />
    </>
  )
}

export default Home
