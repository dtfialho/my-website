import styled from 'styled-components'
import {
  container,
  textColorDark,
  tabletPortrait
} from './utils'
import { SocialMediaLink } from './social-media'

export const AboutMeContent = styled.section`
  ${container}
  padding-top: 100px;
`

export const AboutMeTitle = styled.h1`
  font-size: 2.8rem;
  text-align: center;
  color: ${textColorDark};

  ${tabletPortrait(`
    margin-bottom: 3.5rem;
  `)}
`

export const AboutMeContainer = styled.article`
  .me {
    height: 200px;
    width: 200px;
    min-width: 200px;
    margin: 0 auto 30px;

    ${tabletPortrait(`
      float: left;
      margin: 0 50px 0 0;
    `)}
    
    img {
      border-radius: 50%;
    }
  }
`

export const AboutMeContact = styled.div`
  text-align: center;

  ${SocialMediaLink} {
    color: rgb(${textColorDark});
    border-color: rgb(${textColorDark});
    &:hover {
      background: rgba(${textColorDark}, .3);
      opacity: .8;
    }
  }
`
