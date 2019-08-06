import React from "react"
import { Link } from "gatsby"
import Logo from "../components/logo"
import "../styles/navbar.scss";

const Navbar = () => (
  <nav className="navbar">
    <Logo />
    
    <ul className="navbar__container">
      <li className="navbar__item">
        <Link
          to="/"
          activeClassName="active">
          Home
        </Link>
      </li>
      <li className="navbar__item">
        <Link
          to="/about-me"
          activeClassName="active">
          Sobre Mim
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navbar
