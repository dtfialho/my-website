'use client'
import { useRef, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import gsap from 'gsap'

import './styles.css'
import Header from 'components/header'
import SocialMedia from 'components/social-media'

const Home = () => {
  const content = useRef(null)
  const t = useTranslations()

  useEffect(() => {
    gsap.to(content.current, { duration: 2, autoAlpha: 1, delay: 1 })
  }, [])

  return (
    <main className="home__container">
      <Image
        src="/img/bg.jpg"
        alt="Background image"
        priority
        fill
        sizes="100vw"
        className="home__image"
      />
      <Header />
      <section className="home__content" ref={content}>
        <h1 className="home__title">Diego T. Fialho</h1>
        <p className="home__role">&mdash; {t('Home.subtitle')} &mdash;</p>
        <SocialMedia />
      </section>
    </main>
  )
}

export default Home
