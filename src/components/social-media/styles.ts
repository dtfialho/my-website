import styled from 'styled-components'

export const Container = styled.ul`
  padding: 0;
  margin: 30px 0 0;
  list-style-type: none;
`

export const Item = styled.li`
  display: inline-block;
  margin: 0 8px;
`

export const Link = styled.a`
  font-size: 2rem;
  display: flex;
  width: 70px;
  height: 70px;
  color: currentColor;
  border-radius: 50%;
  border: 1px solid currentColor;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: 0.3s ease-in-out;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`
