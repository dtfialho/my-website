import React from 'react'
import PropTypes from 'prop-types'
import SEO from '../SEO'
import Header from '../Header'
import GlobalStyles from '../../styles/global'
import * as S from './styled'

const Layout = ({ title, children, hasPaddingBottom }) => (
  <S.LayoutMain hasPaddingBottom={hasPaddingBottom}>
    <GlobalStyles />
    <SEO title={title} />
    <Header isFixed />

    {children}
  </S.LayoutMain>
)

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  hasPaddingBottom: PropTypes.bool,
  children: PropTypes.node.isRequired
}

export default Layout
