import { useEffect, useRef } from 'react'
import { TweenMax } from 'gsap'
import Header from 'components/header'
import SocialMedia from 'components/social-media'
import * as S from './styles'

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
        <SocialMedia />
      </S.Content>
    </S.Wrapper>
  )
}

export default Home
