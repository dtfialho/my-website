import React from 'react'
import PropTypes from 'prop-types'
import GlobalStyles from '../styles/global'
import SEO from './seo'
import Navbar from './navbar'

const Layout = ({ title, children }) => (
  <main>
    <GlobalStyles />
    <SEO title={title} />
    <header>
      <Navbar />
    </header>

    {children}
  </main>
)

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Layout
