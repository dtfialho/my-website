import React from 'react'
import Logo from '../Logo'
import Navbar from '../Navbar'
import * as S from './styled'

const Header = () => (
  <S.HeaderElement>
    <S.HeaderLogoLink to="/">
      <Logo />
    </S.HeaderLogoLink>
    <Navbar />
  </S.HeaderElement>
)

export default Header
