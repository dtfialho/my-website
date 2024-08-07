import { createGlobalStyle } from 'styled-components'
import media from 'styled-media-query'

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    max-width: 100%;
  }

  html,
  body,
  #__next {
    height: 100%;
  }

  header {
    background-color: rgb(153, 46, 36);
    box-shadow: 0px 0px 5px rgb(51, 51, 51);
  }

  body {
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    color: #000;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    margin-bottom: 24px;
  }

  h1 {
    font-size: 28px;
    line-height: 1.2;

    ${media.greaterThan('medium')`
      font-size: 40px;
    `}
  }

  h2 {
    font-size: 24px;

    ${media.greaterThan('medium')`
      font-size: 26px;
    `}
  }

  ul {
    padding-left: 16px;
  }

  p,
  li {
    line-height: 1.3;
  }

  li {
    margin-bottom: 4px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

export default GlobalStyles
