import React from 'react'
import PropTypes from 'prop-types'
import SEO from '../SEO'
import Header from '../Header'
import GlobalStyles from '../../styles/global'
import * as S from './styled'

const Layout = ({ title, children }) => (
  <S.LayoutMain>
    <GlobalStyles />
    <SEO title={title} />
    <Header />

    {children}
  </S.LayoutMain>
)

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Layout
