'use client'
import { useRef, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import gsap from 'gsap'

import Header from 'components/header'
import SocialMedia from 'components/social-media'
import * as S from './styles'

const Home = () => {
  const content = useRef(null)
  const t = useTranslations()

  useEffect(() => {
    gsap.to(content.current, { duration: 2, autoAlpha: 1, delay: 1 })
  }, [])

  return (
    <S.Wrapper>
      <Image
        src="/img/bg.jpg"
        alt="Background image"
        priority
        fill
        sizes="100vw"
      />
      <Header />
      <S.Content ref={content}>
        <S.Title>Diego T. Fialho</S.Title>
        <S.Paragraph>&mdash; {t('Home.subtitle')} &mdash;</S.Paragraph>
        <SocialMedia />
      </S.Content>
    </S.Wrapper>
  )
}

export default Home
