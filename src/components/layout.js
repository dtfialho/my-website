import React from 'react'
import t from 'prop-types'
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
  id: t.string.isRequired,
  title: t.string.isRequired,
  children: t.node.isRequired
}

export default Layout
