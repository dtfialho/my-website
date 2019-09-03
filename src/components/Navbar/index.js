import React from "react"
import { Link } from "gatsby"
import Logo from "../Logo"
import * as S from "./styled";

const NavbarComponent = () => (
  <S.NavbarWrapper>
    <Link to="/">
      <Logo />
    </Link>
    
    <S.NavbarContainer>
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

export default NavbarComponent
