import React, { useEffect, useRef } from "react"
import { TweenMax } from 'gsap'

import SEO from "../components/seo"
import Navbar from "../components/navbar"
import SocialMedia from "../components/social-media"
import "../styles/home.scss"

const IndexPage = () => {
  const content = useRef(null)
  
  useEffect(() => {
    TweenMax
      .to(content.current, 2, { autoAlpha: 1, delay: 1 })
  }, [])
  
  return (
    <main id="home">
      <SEO title="Home" />
      <header>
        <Navbar />
      </header>
  
      <section className="home__content" ref={content}>
        <h1>Diego T. Fialho</h1>
        <p>&mdash; Front End Web Developer &mdash;</p>
        <SocialMedia />
      </section>
    </main>
  )
}

export default IndexPage
