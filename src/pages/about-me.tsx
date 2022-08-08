import useTranslation from 'next-translate/useTranslation'

import Template from 'templates/about-me'
import Seo from 'components/seo'

const AboutMe = () => {
  const { t } = useTranslation()

  const title = `${t('about-me:title')} | Diego T. Fialho`
  const description = t('about-me:description')
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
          images: [
            { url: 'https://www.diegotfialho.com.br/img/icon-512x512.png' }
          ]
        }}
      />

      <Template />
    </>
  )
}

export default AboutMe
