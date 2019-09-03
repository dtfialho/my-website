import React from 'react'
import Layout from '../components/Layout'
import AboutMeText from '../components/AboutMeText'
import MySkills from '../components/MySkills'
import SocialMedia from '../components/SocialMedia'
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
          <S.AboutMeContactTitle>Contato</S.AboutMeContactTitle>
          <SocialMedia />
        </S.AboutMeContact>
      </S.AboutMeContainer>
    </S.AboutMeContent>
  </Layout>
)

export default AboutMe
