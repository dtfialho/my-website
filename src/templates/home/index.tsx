import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import { useEffect, useRef } from 'react'
import { TweenMax } from 'gsap'

import Header from 'components/header'
import SocialMedia from 'components/social-media'
import * as S from './styles'

const Home = () => {
  const content = useRef(null)
  const { t } = useTranslation()

  useEffect(() => {
    TweenMax.to(content.current, 2, { autoAlpha: 1, delay: 1 })
  }, [])

  return (
    <S.Wrapper>
      <Image
        src="/img/bg.jpg"
        alt="Background image"
        objectFit="cover"
        layout="fill"
        priority
      />
      <Header />
      <S.Content ref={content}>
        <S.Title>Diego T. Fialho</S.Title>
        <S.Paragraph>&mdash; {t('home:subtitle')} &mdash;</S.Paragraph>
        <SocialMedia />
      </S.Content>
    </S.Wrapper>
  )
}

export default Home
