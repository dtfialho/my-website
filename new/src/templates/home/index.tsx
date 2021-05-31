import { useEffect, useRef } from 'react'
import { TweenMax } from 'gsap'
import Header from 'components/header'
import * as S from './styles'
// import SocialMedia from "../components/SocialMedia"

const Home = () => {
  const content = useRef(null)

  useEffect(() => {
    TweenMax.to(content.current, 2, { autoAlpha: 1, delay: 1 })
  }, [])

  return (
    <S.Wrapper>
      <Header />
      <S.Content ref={content}>
        <S.Title>Diego T. Fialho</S.Title>
        <S.Paragraph>&mdash; Front End Web Developer &mdash;</S.Paragraph>
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
