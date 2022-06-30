import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.article`
  &:not(:last-child) {
    margin-bottom: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid #d9d9d9;
  }
`

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  ${media.greaterThan('medium')`
    flex-direction: row;
  `}
`

export const ImageWrapper = styled.figure`
  position: relative;
  width: 300px;
  height: 150px;

  img {
    transform: translateZ(0);
  }
`

export const Content = styled.div`
  padding-top: 16px;

  ${media.greaterThan('medium')`
    padding: 16px 24px 0;
  `}
`

export const Title = styled.h2`
  margin-bottom: 4px;
`

export const Description = styled.p`
  margin-bottom: 4px;
`

export const Date = styled.em`
  font-size: 0.8rem;
  font-style: italic;
  margin-bottom: 0;
  color: #666;
`
