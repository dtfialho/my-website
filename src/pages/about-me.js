import React from 'react'
import Layout from '../components/layout'
import AboutMeText from '../components/about-me-text'
import MySkills from '../components/my-skills'
import SocialMedia from '../components/social-media'
import * as S from '../styles/about-me'

const AboutMe = () => (
  <Layout
    title="Sobre mim"
  >
    <S.AboutMeContent>
      <S.AboutMeTitle>Sobre Mim</S.AboutMeTitle>
      
      <S.AboutMeContainer>
        <AboutMeText />
        <MySkills />

        <S.AboutMeContact>
          <h2>Contato</h2>
          <SocialMedia />
        </S.AboutMeContact>
      </S.AboutMeContainer>
    </S.AboutMeContent>
  </Layout>
)

export default AboutMe
