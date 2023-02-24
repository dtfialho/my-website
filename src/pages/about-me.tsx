import useTranslation from 'next-translate/useTranslation'

import Template from 'templates/about-me'
import Seo from 'components/seo'
import Keywords from 'components/seo/keywords'

const AboutMe = () => {
  const { t } = useTranslation()

  const title = `${t('about-me:title')} | Diego T. Fialho`
  const description = t('about-me:description')
  const keywords = t('about-me:keywords')
  const url = 'https://www.diegotfialho.dev/about-me'

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
            { url: 'https://www.diegotfialho.dev/img/icon-512x512.png' }
          ]
        }}
      />
      <Keywords content={keywords} />

      <Template />
    </>
  )
}

export default AboutMe
