import styled from 'styled-components'
import {
  container,
  textColorDark,
  tabletPortrait
} from './utils'
import { SocialMediaLink } from '../components/SocialMedia/styled'

export const AboutMeContent = styled.section`
  ${container}
  padding-top: 100px;
`

export const AboutMeTitle = styled.h1`
  font-size: 2.8rem;
  text-align: center;
  color: ${textColorDark};

  ${tabletPortrait(`
    margin-bottom: 20px;
  `)}
`

export const AboutMeContainer = styled.article``

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
export const AboutMeContactTitle = styled.h2``
