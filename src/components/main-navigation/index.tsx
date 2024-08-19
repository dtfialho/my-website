'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import LanguageSelector from 'components/language-selector'
import * as S from './styles'

const MainNavigation = () => {
  const t = useTranslations()
  const [open, setOpen] = useState(false)
  const path = usePathname()

  return (
    <S.Wrapper open={open}>
      <S.Hamburger type="button" title="Menu" onClick={() => setOpen(!open)}>
        <S.Icon open={open}></S.Icon>
      </S.Hamburger>

      <S.Container open={open}>
        <S.Item>
          <Link href="/">
            <S.Link active={path === '/'}>Home</S.Link>
          </Link>
        </S.Item>

        <S.Item>
          <Link href="/blog">
            <S.Link active={!!path?.match(/\/blog/)}>Blog</S.Link>
          </Link>
        </S.Item>

        <S.Item>
          <Link href="/about-me">
            <S.Link active={path === '/about-me'}>{t('Common.aboutMe')}</S.Link>
          </Link>
        </S.Item>

        <S.Item onClick={() => setOpen(!open)}>
          <LanguageSelector />
        </S.Item>
      </S.Container>
    </S.Wrapper>
  )
}

export default MainNavigation
