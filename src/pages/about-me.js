import React from 'react'
import SEO from '../components/seo'
import Navbar from '../components/navbar'
import AboutMeText from '../components/about-me-text'
import '../styles/about-me.scss'

const AboutMe = () => (
  <main id="about-me">
    <SEO title="Sobre mim" />
    <header>
      <Navbar />
    </header>

    <section className="about-me__content">
      <h1>Sobre Mim</h1>
      
      <article className="about-me__container">
        <AboutMeText />
      </article>
    </section>
  </main>
)

export default AboutMe
