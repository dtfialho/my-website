import React from "react"
import { Link } from "gatsby"
import Logo from "../components/logo"
import {
  NavbarWrapper,
  NavbarContainer,
  NavbarItem
} from "../styles/navbar";

const NavbarComponent = () => (
  <NavbarWrapper>
    <Link to="/">
      <Logo />
    </Link>
    
    <NavbarContainer>
      <NavbarItem>
        <Link
          to="/"
          activeClassName="active">
          Home
        </Link>
      </NavbarItem>
      
      <NavbarItem>
        <Link
          to="/about-me"
          activeClassName="active">
          Sobre Mim
        </Link>
      </NavbarItem>
    </NavbarContainer>
  </NavbarWrapper>
)

export default NavbarComponent
