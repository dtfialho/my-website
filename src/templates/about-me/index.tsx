import Image from 'next/legacy/image'
import useTranslation from 'next-translate/useTranslation'

import Header from 'components/header'
import SocialMedia from 'components/social-media'
import * as S from './styles'

const AboutMe = () => {
  const { t } = useTranslation()

  return (
    <>
      <Header fixed />
      <S.Wrapper>
        <S.TitleContainer>
          <Image
            src="/img/me.jpeg"
            layout="fixed"
            alt={t('about-me:profilePicture')}
            width={150}
            height={150}
            priority
          />
          <S.Title>{t('about-me:title')}</S.Title>
        </S.TitleContainer>

        <p>{t('about-me:firstParagraph')}</p>

        <p>{t('about-me:secondParagraph')}</p>

        <p>{t('about-me:thirdParagraph')}</p>

        <S.SkillsContainer>
          <h2>{t('about-me:whatIDo')}:</h2>

          <S.Items>
            <S.Skills>
              <S.SkillItemTitle>Frontend</S.SkillItemTitle>
              <S.SkillsList>
                <li>Angular</li>
                <li>AngularJS</li>
                <li>CSS3</li>
                <li>HTML5</li>
                <li>Javascript</li>
                <li>{t('about-me:preProcessors')} (sass, less, stylus)</li>
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
                <li>{t('about-me:oop')}</li>
                <li>Python</li>
                <li>MySql</li>
                <li>PostgreeSQL</li>
              </S.SkillsList>
            </S.Skills>

            <S.Skills>
              <S.SkillItemTitle>{t('about-me:others')}</S.SkillItemTitle>
              <S.SkillsList>
                <li>Scrum</li>
                <li>Git</li>
                <li>TDD</li>
              </S.SkillsList>
            </S.Skills>
          </S.Items>
        </S.SkillsContainer>

        <S.Contact>{t('about-me:contact')}</S.Contact>
        <S.SocialMediaWrapper>
          <SocialMedia />
        </S.SocialMediaWrapper>
      </S.Wrapper>
    </>
  )
}

export default AboutMe
