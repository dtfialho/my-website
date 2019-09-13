import styled from 'styled-components'
import { Link } from "gatsby"
import {
  textColorLight,
  phoneOnly,
  tabletPortrait
} from '../../styles/utils'

export const NavbarWrapper = styled.nav`
  ${props => props.isMenuOpen ? 
    phoneOnly(`
      position: fixed;
      background: rgba(0,0,0,0.8);
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
      display: flex;
      transition: .3s ease-in-out;
    `) : ''
  }

  ${props => props.isMenuOpen ? `
    ${NavbarHamburgerIcon} {
      transform: rotate(45deg);
      &::before {
        transform: rotate(90deg);
        top: 0;
      }

      &::after {
        transform: rotate(90deg);
        bottom: 0;
      }
    }
  ` : ''}
`

export const NavbarHamburger = styled.div`
  width: 50px;
  height: 50px;
  padding: 5px;
  position: fixed;
  top: 20px;
  right: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  ${tabletPortrait(`
    display: none;
  `)}
`

export const NavbarHamburgerIcon = styled.span`
  position: relative;
  display: block;
  background: #fff;
  width: 40px;
  height: 3px;
  transition: .5s ease-in-out;

  &::before, &::after {
    background: #fff;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    transition: .5s ease-in-out;
  }

  &::before {
    top: -12px;
  }

  &::after {
    bottom: -12px;
  }
`

export const NavbarContainer = styled.ul`
  visibility: ${props => props.isMenuOpen ? 'visible' : 'hidden'};
  opacity: ${props => props.isMenuOpen ? '1' : '0'};
  ${props => !props.isMenuOpen ? 'height: 0;' : ''}
  list-style: none;
  align-self: center;
  margin: 0 auto;

  ${tabletPortrait(`
    max-width: 1200px;
    width: auto;
    height: auto;
    display: block;
    visibility: visible;
    opacity: 1;
  `)}
`

export const NavbarItem = styled.li`
  display: block;
  text-align: center;
  
  ${tabletPortrait(`
    display: inline-block;
    padding: 0 20px;
  `)}
`

export const NavbarLink = styled(Link)`
  text-decoration: none;
  color: rgb(${textColorLight});
  font-weight: 700;
  font-size: 20px;
  position: relative;
  &:hover::after,
  &.active::after {
    width: 100%;
  }

  &::after {
    display: block;
    width: 0;
    height: 2px;
    transition: width .3s ease-in-out;
    background-color: rgb(${textColorLight});
    content: '';
  }
`
