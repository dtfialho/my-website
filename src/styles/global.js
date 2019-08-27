import { createGlobalStyle } from 'styled-components'
import { backgroundColorDark, textColorDark } from './utils';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700,900&display=swap');
  @import url('https://use.fontawesome.com/releases/v5.4.2/css/all.css');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    max-width: 100%;
    z-index: 1;
  }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }

  body {
    font-size: 16px;
  }

  header {
    background-color: rgb(${backgroundColorDark});
    box-shadow: 0px 0px 5px rgb(${textColorDark});
  }

  h1, h2, h3, h4, h5, p {
    margin-bottom: 20px;
  }

  p, li {
    font-size: 1.25rem;
    line-height: 1.7;
  }

  a {
    text-decoration: dashed;
  }

  main:not(#home) {
    padding-bottom: 100px;
  }
`

export default GlobalStyles
