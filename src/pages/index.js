import React, { useEffect, useRef } from "react"
import { TweenMax } from 'gsap'

import SEO from "../components/seo"
import Navbar from "../components/navbar"
import SocialMedia from "../components/social-media"
import {
  Home,
  HomeContent
} from "../styles/home"
import GlobalStyles from '../styles/global'

const IndexPage = () => {
  const content = useRef(null)
  
  useEffect(() => {
    TweenMax
      .to(content.current, 2, { autoAlpha: 1, delay: 1 })
  }, [])
  
  return (
    <Home>
      <GlobalStyles />
      <SEO title="Home" />
      <header>
        <Navbar />
      </header>
  
      <HomeContent ref={content}>
        <h1>Diego T. Fialho</h1>
        <p>&mdash; Front End Web Developer &mdash;</p>
        <SocialMedia />
      </HomeContent>
    </Home>
  )
}

export default IndexPage
