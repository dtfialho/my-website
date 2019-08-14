import React from 'react'
import Layout from '../components/layout'
import AboutMeText from '../components/about-me-text'
import MySkills from '../components/my-skills'
import SocialMedia from '../components/social-media'
import '../styles/about-me.scss'

const AboutMe = () => (
  <Layout
    id="about-me"
    title="Sobre mim"
  >
    <section className="about-me__content">
      <h1>Sobre Mim</h1>
      
      <article className="about-me__container">
        <AboutMeText />
        <MySkills />

        <div className="about-me__contact">
          <h2>Contato</h2>
          <SocialMedia />
        </div>
      </article>
    </section>
  </Layout>
)

export default AboutMe
