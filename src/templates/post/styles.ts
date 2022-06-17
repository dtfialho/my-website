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
  p {
    text-align: justify;
  }
`

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 0;
`

export const Date = styled.em`
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

export const ImageWrapper = styled.div`
  width: fit-content;
  margin: 0 auto 24px;
`
