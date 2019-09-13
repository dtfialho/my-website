import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../Logo'
import Navbar from '../Navbar'
import * as S from './styled'

const Header = ({ isFixed }) => (
  <S.HeaderElement isFixed={isFixed}>
    <S.HeaderLogoLink to="/">
      <Logo />
    </S.HeaderLogoLink>
    <Navbar />
  </S.HeaderElement>
)

Header.propTypes = {
  isFixed: PropTypes.bool
}

export default Header
