import styled from 'styled-components'
// import { SocialMediaContainer } from '../components/SocialMedia/styled'

export const Wrapper = styled.main`
  background-image: url('/img/bg.jpg');
  background-size: cover;
  height: 100vh;
  color: #fff;

  &::before {
    display: block;
    width: 100vw;
    height: calc(100vh - 93px);
    top: 93px;
    position: fixed;
    background: rgba(0, 0, 0, 0.3);
    content: '';
  }

  /* ${SocialMediaContainer} {
    margin-top: 30px;
    text-align: center;
  } */
`

export const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  visibility: hidden;
  opacity: 0;
  text-align: center;
  height: calc(100vh - 93px);

  h1,
  p {
    cursor: default;
  }
`

// export const HomeTitle = styled.h1`
//   font-size: 3.5rem;
//   margin-bottom: 10px;
// `

// export const HomeParagraph = styled.p`
//   font-weight: 400;
//   margin-bottom: 0;
// `
