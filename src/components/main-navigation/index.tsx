import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

import LanguageSelector from 'components/language-selector'
import * as S from './styles'

const MainNavigation = () => {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const { asPath } = useRouter()

  return (
    <S.Wrapper open={open}>
      <S.Hamburger type="button" title="Menu" onClick={() => setOpen(!open)}>
        <S.Icon open={open}></S.Icon>
      </S.Hamburger>

      <S.Container open={open}>
        <S.Item>
          <Link href="/">
            <S.Link active={asPath === '/'}>Home</S.Link>
          </Link>
        </S.Item>

        <S.Item>
          <Link href="/blog">
            <S.Link active={!!asPath.match(/\/blog/)}>Blog</S.Link>
          </Link>
        </S.Item>

        <S.Item>
          <Link href="/about-me">
            <S.Link active={asPath === '/about-me'}>
              {t('common:aboutMe')}
            </S.Link>
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
