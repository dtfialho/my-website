import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import * as S from './styles'

const MainNavigation = () => {
  const [open, setOpen] = useState(false)
  const { asPath } = useRouter()

  return (
    <S.Wrapper open={open}>
      <S.Hamburger title="Menu" onClick={() => setOpen(!open)}>
        <S.Icon open={open}></S.Icon>
      </S.Hamburger>

      <S.Container open={open}>
        <S.Item>
          <Link href="/" passHref>
            <S.Link active={asPath === '/'}>Home</S.Link>
          </Link>
        </S.Item>

        <S.Item>
          <Link href="/blog" passHref>
            <S.Link active={!!asPath.match(/\/blog/)}>Blog</S.Link>
          </Link>
        </S.Item>

        <S.Item>
          <Link href="/about-me" passHref>
            <S.Link active={asPath === '/about-me'}>Sobre mim</S.Link>
          </Link>
        </S.Item>
      </S.Container>
    </S.Wrapper>
  )
}

export default MainNavigation
