import styled from 'styled-components'
import { textColorLight } from '../../styles/utils';

export const SocialMediaContainer = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`

export const SocialMediaItem = styled.li`
  display: inline-block;
  margin: 8px;
`

export const SocialMediaLink = styled.a`
  font-size: 2rem;
  display: flex;
  width: 70px;
  height: 70px;
  color: rgb(${textColorLight});
  border-radius: 50%;
  border: 1px solid rgb(${textColorLight});
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: .3s ease-in-out;
  backface-visibility: hidden;

  &:hover {
    background: rgba(${textColorLight}, .3);
  }
`

export const SocialMediaIcon = styled.i``
