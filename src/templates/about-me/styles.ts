import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 153px 16px 100px;

  ${media.greaterThan('medium')`
    padding: 193px 16px 100px;
  `}
`

export const TitleContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;

  > span {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }

  ${media.greaterThan('medium')`
    flex-direction: row;
    margin-bottom: 40px;
  `}
`

export const Title = styled.h1`
  text-align: center;
  margin: 20px 0 0;

  ${media.greaterThan('medium')`
    margin-top: 0;
    margin-left: 50px;
  `}
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

export const Contact = styled.h2`
  text-align: center;
`

export const SocialMediaWrapper = styled.div`
  color: #333;
  text-align: center;
`
