import styled from 'styled-components'
import { Link } from 'gatsby'

export const HeaderElement = styled.header`
  width: 100vw;
  padding: 20px 40px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
`

export const HeaderLogoLink = styled(Link)`
  svg {
    width: 50px;
  }
`
