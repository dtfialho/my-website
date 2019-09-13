import React, { useState } from 'react'
import * as S from './styled';

const NavbarComponent = () => {
  const [isMenuOpen, toggleMenu] = useState(false)

  return (
    <S.NavbarWrapper isMenuOpen={isMenuOpen}>
      <S.NavbarHamburger onClick={() => toggleMenu(!isMenuOpen)}>
        <S.NavbarHamburgerIcon></S.NavbarHamburgerIcon>
      </S.NavbarHamburger>
      
      <S.NavbarContainer isMenuOpen={isMenuOpen}>
        <S.NavbarItem>
          <S.NavbarLink
            to="/"
            activeClassName="active">
            Home
          </S.NavbarLink>
        </S.NavbarItem>
        
        <S.NavbarItem>
          <S.NavbarLink
            to="/about-me"
            activeClassName="active">
            Sobre Mim
          </S.NavbarLink>
        </S.NavbarItem>
      </S.NavbarContainer>
    </S.NavbarWrapper>
  )
}

export default NavbarComponent
