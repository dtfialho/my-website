import { useState } from 'react'
import * as S from './styles'

const MainNavigation = () => {
  const [open, setOpen] = useState(false)

  return (
    <S.Wrapper open={open}>
      <S.Hamburger onClick={() => setOpen(!open)}>
        <S.HamburgerIcon></S.HamburgerIcon>
      </S.Hamburger>

      <S.Container open={open}>
        <S.Item>
          <S.Link href="/">
            Home
          </S.Link>
        </S.Item>

        <S.Item>
          <S.Link href="/about-me">
            Sobre Mim
          </S.Link>
        </S.Item>
      </S.Container>
    </S.Wrapper>
  )
}

export default MainNavigation
