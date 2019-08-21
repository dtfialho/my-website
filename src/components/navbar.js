import React from "react"
import { Link } from "gatsby"
import Logo from "../components/logo"
import * as S from "../styles/navbar";

const NavbarComponent = () => (
  <S.NavbarWrapper>
    <Link to="/">
      <Logo />
    </Link>
    
    <S.NavbarContainer>
      <S.NavbarItem>
        <Link
          to="/"
          activeClassName="active">
          Home
        </Link>
      </S.NavbarItem>
      
      <S.NavbarItem>
        <Link
          to="/about-me"
          activeClassName="active">
          Sobre Mim
        </Link>
      </S.NavbarItem>
    </S.NavbarContainer>
  </S.NavbarWrapper>
)

export default NavbarComponent
