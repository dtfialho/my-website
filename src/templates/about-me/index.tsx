import Image from 'next/image'
import { useTranslations } from 'next-intl'

import Header from 'components/header'
import SocialMedia from 'components/social-media'
import * as S from './styles'

const AboutMe = () => {
  const t = useTranslations()

  return (
    <>
      <Header fixed />
      <S.Wrapper>
        <S.TitleContainer>
          <Image
            src="/img/me.jpeg"
            alt={t('AboutMe.profilePicture')}
            width={150}
            height={150}
            priority
          />
          <S.Title>{t('AboutMe.title')}</S.Title>
        </S.TitleContainer>

        <p>{t('AboutMe.firstParagraph')}</p>

        <p>{t('AboutMe.secondParagraph')}</p>

        <p>{t('AboutMe.thirdParagraph')}</p>

        <S.SkillsContainer>
          <h2>{t('AboutMe.whatIDo')}:</h2>

          <S.Items>
            <S.Skills>
              <S.SkillItemTitle>Frontend</S.SkillItemTitle>
              <S.SkillsList>
                <li>Angular</li>
                <li>AngularJS</li>
                <li>CSS3</li>
                <li>HTML5</li>
                <li>Javascript</li>
                <li>{t('AboutMe.preProcessors')} (sass, less, stylus)</li>
                <li>React</li>
                <li>Styled Components</li>
                <li>Next JS</li>
              </S.SkillsList>
            </S.Skills>

            <S.Skills>
              <S.SkillItemTitle>Backend</S.SkillItemTitle>
              <S.SkillsList>
                <li>Node</li>
                <li>PHP</li>
                <li>{t('AboutMe.oop')}</li>
                <li>Python</li>
                <li>MySql</li>
                <li>PostgreeSQL</li>
              </S.SkillsList>
            </S.Skills>

            <S.Skills>
              <S.SkillItemTitle>{t('AboutMe.others')}</S.SkillItemTitle>
              <S.SkillsList>
                <li>Scrum</li>
                <li>Git</li>
                <li>TDD</li>
              </S.SkillsList>
            </S.Skills>
          </S.Items>
        </S.SkillsContainer>

        <S.Contact>{t('AboutMe.contact')}</S.Contact>
        <S.SocialMediaWrapper>
          <SocialMedia />
        </S.SocialMediaWrapper>
      </S.Wrapper>
    </>
  )
}

export default AboutMe
