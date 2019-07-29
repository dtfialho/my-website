import React from 'react'
import Navbar from '../components/navbar'
import SEO from '../components/seo'
import '../styles/about-me.scss'

const AboutMe = () => (
  <main id="about-me">
    <SEO title="Sobre mim" />
    <header>
      <Navbar />
    </header>

    <section className="about-me__content">
      <h1>Sobre Mim</h1>
    </section>
  </main>
)

export default AboutMe
