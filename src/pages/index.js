import React, { useEffect } from "react"
import { TweenMax } from 'gsap'

import SEO from "../components/seo"
import Navbar from "../components/navbar"
import SocialMedia from "../components/social-media"
import "../styles/home.scss"

const IndexPage = () => {
  useEffect(() => {
    const content = document.querySelector('.home__content')
    TweenMax
      .to(content, 2, { autoAlpha: 1, delay: 1 })
  })
  
  return (
    <main id="home">
      <SEO title="Home" />
      <header>
        <Navbar />
      </header>
  
      <section className="home__content">
        <h1>Diego T. Fialho</h1>
        <p>&mdash; Front End Web Developer &mdash;</p>
        <SocialMedia />
      </section>
    </main>
  )
}

export default IndexPage
