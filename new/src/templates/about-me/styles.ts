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

export const TitleContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;

  > div {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-bottom: 20px;
  }

  ${media.greaterThan('medium')`
    flex-direction: row;
    margin-bottom: 40px;

    > div {
      margin-bottom: 0;
      margin-right: 50px;
    }
  `}
`

export const Title = styled.h1`
  text-align: center;
  margin: 0;
`

export const SkillsContainer = styled.div`
  margin: 50px 0 40px;
  border-bottom: 1px solid rgb(153, 46, 36);
`

export const Items = styled.div`
  ${media.greaterThan('medium')`
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
  `}
`

export const Skills = styled.div`
  margin-bottom: 40px;

  ${media.greaterThan('medium')`
    flex-basis: 30%;
  `}
`

export const SkillItemTitle = styled.h3`
  margin-bottom: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid rgb(153, 46, 36);
`

export const SkillsList = styled.ul`
  list-style-type: none;
`
