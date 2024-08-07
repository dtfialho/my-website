import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  position: relative;
  height: 100vh;
  color: #fff;

  > img {
    z-index: -1;
    object-fit: cover;
  }

  &::after {
    display: block;
    width: 100vw;
    height: calc(100vh - 93px);
    top: 93px;
    position: fixed;
    background-color: rgb(0 0 0 / 30%);
    content: '';
    z-index: -1;
  }
`

export const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  visibility: hidden;
  opacity: 0;
  text-align: center;
  height: calc(100vh - 93px);
`

export const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 8px;
  cursor: default;

  ${media.greaterThan('medium')`
    font-size: 3.5rem;
  `}
`

export const Paragraph = styled.p`
  font-weight: 400;
  margin-bottom: 0;
  cursor: default;
`
