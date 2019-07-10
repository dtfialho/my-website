import React, { useEffect } from "react"
import { TweenMax } from 'gsap'

import SEO from "../components/seo"
import Logo from "../components/logo"
import SocialMedia from "../components/social-media"
import "../styles/home.scss"

const IndexPage = () => {
  useEffect(() => {
    const header = document.querySelector('header')
    const contact = document.querySelector('.contact')
    TweenMax
      .to([header, contact], 2, { autoAlpha: 1, delay: 1 })
  })
  
  return (
    <main id="home">
      <SEO title="Home" />
  
      <header>
        <Logo />
        <h1>Diego T. Fialho</h1>
        <p>&mdash; Front End Web Developer &mdash;</p>
      </header>
  
      <section className="contact">
        <SocialMedia />
      </section>
    </main>
  )
}

export default IndexPage
