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
  font-size: 4rem;
  text-align: center;
  color: rgb(51, 51, 51);
  margin: 0;
`
