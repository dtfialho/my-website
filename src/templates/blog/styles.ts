import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 16px 100px;

  ${media.greaterThan('medium')`
    padding-top: 193px;
  `}
`

export const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
  border-bottom: 2px solid #d9d9d9;
  margin-bottom: 40px;
  padding-bottom: 24px;

  ${media.greaterThan('medium')`
    margin-bottom: 56px;
  `}
`
