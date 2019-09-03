import styled from 'styled-components'
import { Link } from "gatsby"
import { textColorLight } from '../../styles/utils'

export const NavbarWrapper = styled.nav`
  width: 100vw;
  padding: 20px 40px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;

  .logo {
    width: 50px;
  }
`

export const NavbarContainer = styled.ul`
  list-style: none;
  max-width: 1200px;
  align-self: center;
`

export const NavbarItem = styled.li`
  display: inline-block;
  padding: 0 20px;
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
    position: absolute;
    display: block;
    width: 0;
    height: 2px;
    transition: width .3s ease-in-out;
    background-color: rgb(${textColorLight});
    content: '';
  }
`
