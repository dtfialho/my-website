import styled from 'styled-components'
import { backgroundColorDark, tabletPortrait } from '../../styles/utils'

export const MySkillsContainer = styled.div`
  margin: 50px 0 40px;
  border-bottom: 1px solid rgb(${backgroundColorDark});
`

export const MySkillsTitle = styled.h2`
`

export const MySkillsItems = styled.div`
  ${tabletPortrait(`
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
  `)}
`

export const MySkillsItem = styled.div`
  margin-bottom: 40px;

  ${tabletPortrait(`flex-basis: 30%;`)}

  h3 {
    margin-bottom: 10px;
    padding-bottom: 5px;
    border-bottom: 1px solid rgb(${backgroundColorDark});
  }

  ul {
    list-style-type: none;
  }
`
