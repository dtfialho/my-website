import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    max-width: 100%;
    z-index: 1;
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
    margin-bottom: 20px;
  }

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 1.7rem;
  }

  h3 {
    font-size: 1.2rem;
  }

  p,
  li {
    font-size: 1.25rem;
    line-height: 1.7;
  }

  a {
    text-decoration: dashed;
  }
`

export default GlobalStyles
