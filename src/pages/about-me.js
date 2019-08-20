import React from 'react'
import Layout from '../components/layout'
import AboutMeText from '../components/about-me-text'
import MySkills from '../components/my-skills'
import SocialMedia from '../components/social-media'
import {
  AboutMeContent,
  AboutMeTitle,
  AboutMeContainer,
  AboutMeContact
} from '../styles/about-me'

const AboutMe = () => (
  <Layout
    title="Sobre mim"
  >
    <AboutMeContent>
      <AboutMeTitle>Sobre Mim</AboutMeTitle>
      
      <AboutMeContainer>
        <AboutMeText />
        <MySkills />

        <AboutMeContact>
          <h2>Contato</h2>
          <SocialMedia />
        </AboutMeContact>
      </AboutMeContainer>
    </AboutMeContent>
  </Layout>
)

export default AboutMe
