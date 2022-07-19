import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  max-width: 912px;
  margin: 0 auto;
  padding: 153px 16px 100px;

  ${media.greaterThan('medium')`
    padding-top: 193px;
  `}
`

export const Article = styled.article`
  a {
    text-decoration: underline;
  }

  pre,
  ul,
  iframe {
    margin-bottom: 24px;
  }

  p,
  li {
    code {
      display: inline-block;
      padding: 2px 4px;
      color: #c7254e;
      background-color: #f9f2f4;
      border-radius: 4px;
    }
  }

  pre {
    line-height: 1.4;
    color: #fff;
    background-color: #282c34;
    border-radius: 6px;
    cursor: default;
    max-width: none;
  }
`

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 0;
`

export const Date = styled.p`
  display: block;
  text-align: center;
  margin-bottom: 32px;

  ${media.greaterThan('medium')`
    margin-bottom: 40px;
  `}
`

export const ArticleImage = styled.div`
  position: relative;
  height: 250px;
  margin-bottom: 32px;

  ${media.greaterThan('medium')`
    height: 300px;
    margin-bottom: 40px;
  `}
`

export const Back = styled.a`
  color: #4c57ba;
  text-decoration: underline;
  margin-top: 32px;
`
