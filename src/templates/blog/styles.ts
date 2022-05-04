import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 153px 15px 100px;

  ${media.greaterThan('medium')`
    padding: 193px 15px 100px;
  `}
`
