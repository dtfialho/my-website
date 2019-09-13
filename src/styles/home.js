import styled from 'styled-components'
import HomeBgImage from '../images/bg.jpg'
import { textColorLight } from './utils'
import { SocialMediaContainer } from '../components/SocialMedia/styled'

export const HomeMain = styled.main`
  background-image: url(${HomeBgImage});
  background-size: cover;
  height: 100vh;
  color: rgb(${textColorLight});

  &::before {
    display: block;
    width: 100vw;
    height: calc(100vh - 93px);
    top: 93px;
    position: fixed;
    background: rgba(0, 0, 0, 0.3);
    content: '';
  }

  ${SocialMediaContainer} {
    margin-top: 30px;
    text-align: center;
  }
`

export const HomeContent = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  visibility: hidden;
  opacity: 0;
  text-align: center;
  height: calc(100vh - 93px);

  h1, p {
    cursor: default;
  }
`

export const HomeTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 10px;
`

export const HomeParagraph = styled.p`
  font-weight: 400;
  margin-bottom: 0;
`
