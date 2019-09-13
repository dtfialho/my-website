import styled from 'styled-components'
import { Link } from 'gatsby'
import { phoneOnly } from '../../styles/utils'

export const HeaderElement = styled.header`
  width: 100vw;
  padding: 20px 40px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;

  ${props => props.isFixed ? `
    ${phoneOnly(`
      position: fixed;
      top: 0;
      left: 0;
      z-index: 2;
    `)}` : ''}
`

export const HeaderLogoLink = styled(Link)`
  svg {
    width: 50px;
  }
`
