import React, { useEffect, useRef } from 'react'
import { TweenMax } from 'gsap'

// import SEO from '../components/SEO'
// import Header from '../components/Header'
// import SocialMedia from "../components/SocialMedia"
import * as S from './styles'

const Home = () => {
  const content = useRef(null)

  useEffect(() => {
    TweenMax.to(content.current, 2, { autoAlpha: 1, delay: 1 })
  }, [])

  return (
    <S.Wrapper>
      <S.Content ref={content}>
        <p>Home page</p>
      </S.Content>
    </S.Wrapper>
    // <S.HomeMain>
    //   <GlobalStyles />
    //   <SEO title="Home" />
    //   <Header />

    //   <S.HomeContent ref={content}>
    //     <S.HomeTitle>Diego T. Fialho</S.HomeTitle>
    //     <S.HomeParagraph>
    //       &mdash; Front End Web Developer &mdash;
    //     </S.HomeParagraph>
    //     <SocialMedia />
    //   </S.HomeContent>
    // </S.HomeMain>
  )
}

export default Home