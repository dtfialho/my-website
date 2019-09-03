import styled from 'styled-components'
import { textColorDark } from '../../styles/utils'

export const NotFoundContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: calc(100vh - 93px);
  color: rgb(${textColorDark});
`

export const NotFoundTitle = styled.h1`
  font-size: 6rem;
  margin-bottom: 10px;
`

export const NotFoundTitleSub = styled.span`
  display: block;
  font-size: 1.5rem;
`

export const NotFountText = styled.p`
  font-weight: 400;
  margin-bottom: 0;
`
