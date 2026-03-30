import Image from 'next/image'
import { useTranslations } from 'next-intl'

import Header from 'components/header'
import SocialMedia from 'components/social-media'
import './styles.css'

const AboutMe = () => {
  const t = useTranslations()

  return (
    <>
      <Header fixed />
      <main className="about-me__container">
        <div className="about-me__title-container">
          <Image
            className="about-me__title-image"
            src="/img/me.jpeg"
            alt={t('AboutMe.profilePicture')}
            width={150}
            height={150}
            priority
          />
          <h1 className="about-me__title">{t('AboutMe.title')}</h1>
        </div>

        <p className="about-me__paragraph">{t('AboutMe.firstParagraph')}</p>

        <p className="about-me__paragraph">{t('AboutMe.secondParagraph')}</p>

        <p className="about-me__paragraph">{t('AboutMe.thirdParagraph')}</p>

        <h2 className="about-me__what-i-do">{t('AboutMe.whatIDo')}:</h2>

        <div className="about-me__items">
          <div className="about-me__skills">
            <h3 className="about-me__skill-item-title">Frontend</h3>
            <ul className="about-me__skills-list">
              <li>Angular</li>
              <li>AngularJS</li>
              <li>CSS3</li>
              <li>HTML5</li>
              <li>Javascript</li>
              <li>{t('AboutMe.preProcessors')} (sass, less, stylus)</li>
              <li>React</li>
              <li>Styled Components</li>
              <li>Next JS</li>
            </ul>
          </div>

          <div className="about-me__skills">
            <h3 className="about-me__skill-item-title">Backend</h3>
            <ul className="about-me__skills-list">
              <li>Node</li>
              <li>PHP</li>
              <li>{t('AboutMe.oop')}</li>
              <li>Python</li>
              <li>MySql</li>
              <li>PostgreeSQL</li>
            </ul>
          </div>

          <div className="about-me__skills">
            <h3 className="about-me__skill-item-title">
              {t('AboutMe.others')}
            </h3>
            <ul className="about-me__skills-list">
              <li>Scrum</li>
              <li>Git</li>
              <li>TDD</li>
            </ul>
          </div>
        </div>

        <h2 className="about-me__contact">{t('AboutMe.contact')}</h2>

        <div className="about-me__social-media-wrapper">
          <SocialMedia inverseColorToBlack />
        </div>
      </main>
    </>
  )
}

export default AboutMe
