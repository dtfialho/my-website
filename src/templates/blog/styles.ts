import styled from 'styled-components'
import media, { generateMedia, defaultBreakpoints } from 'styled-media-query'

const customMediaQuery = generateMedia({
  ...defaultBreakpoints,
  tablet: '992px'
})

export const Wrapper = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 153px 16px 100px;

  ${media.greaterThan('medium')`
    padding-top: 193px;
  `}
`

export const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 40px;

  ${media.greaterThan('medium')`
    font-size: 3.5rem;
    margin-bottom: 72px;
  `}
`

export const Posts = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 16px;

  ${media.greaterThan('medium')`
    gap: 24px;
    grid-template-columns: repeat(2, 1fr);
  `}

  ${customMediaQuery.greaterThan('tablet')`
    grid-row-gap: 48px;
    grid-column-gap: 32px;
    grid-template-columns: repeat(3, 1fr);
  `}
`
