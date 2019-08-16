import React from 'react'
import PropTypes from 'prop-types'
import SEO from './seo'
import Navbar from './navbar'

const Layout = ({ id, title, children }) => (
  <main id={id}>
    <SEO title={title} />
    <header>
      <Navbar />
    </header>

    {children}
  </main>
)

Layout.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Layout
