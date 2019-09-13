import styled from 'styled-components'
import { phoneOnly } from '../../styles/utils'

export const LayoutMain = styled.main`
  padding-bottom: ${props => props.hasPaddingBottom ? '100px' : '0'};
  ${phoneOnly(`
    padding-top: 50px;
  `)}
`

