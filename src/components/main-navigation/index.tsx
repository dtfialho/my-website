import { useState } from 'react'
import { useRouter } from 'next/router'

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
          <S.Link href="/" active={asPath === '/'}>
            Home
          </S.Link>
        </S.Item>

        <S.Item>
          <S.Link href="/blog" active={!!asPath.match(/\/blog/)}>
            Blog
          </S.Link>
        </S.Item>

        <S.Item>
          <S.Link href="/about-me" active={asPath === '/about-me'}>
            Sobre mim
          </S.Link>
        </S.Item>
      </S.Container>
    </S.Wrapper>
  )
}

export default MainNavigation
