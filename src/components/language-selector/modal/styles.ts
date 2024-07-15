import styled, { css } from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  background-color: rgb(0 0 0 / 80%);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  transition: 0.3s ease-in-out;
`

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 310px;
  background-color: #fff;
  z-index: 2;
  transition: 0.3s ease-in-out;
  border-radius: 10px;
  padding: 24px;
`

export const Header = styled.div`
  width: 100%;
  position: relative;
  border-bottom: 1px solid #d9d9d9;
`

export const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 8px;
`

export const Close = styled.button`
  position: absolute;
  top: -16px;
  right: -16px;
  display: block;
  width: 25px;
  height: 25px;
  appearance: none;
  background: none;
  border: none;
  cursor: pointer;
`

export const Body = styled.div`
  padding-top: 16px;
`

export const Select = styled.div`
  display: block;
  position: relative;
  width: 100%;
  margin-bottom: 16px;
`

export const ActiveItem = styled.button`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  appearance: none;
  background: none;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  padding: 8px;
`

export const FlagWrapper = styled.figure`
  width: 29px;
  height: 22px;
  margin-right: 8px;
`

export const DropdownIcon = styled.span<{ rotate: boolean }>`
  ${({ rotate }) => css`
    display: block;
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);

    ${rotate &&
    css`
      transform: translateY(-50%) rotateX(-180deg);
    `}
  `}
`

export const List = styled.ul<{ open: boolean }>`
  ${({ open }) => css`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    list-style-type: none;
    padding: 0;
    max-height: 0;
    background-color: #fff;
    overflow: hidden;
    transition: 0.3s ease-in-out;

    ${!open &&
    css`
      li {
        opacity: 0;
        padding: 0 8px;
      }
    `}

    ${open &&
    css`
      max-height: 200px;
      border: 1px solid #d9d9d9;
    `}
  `}
`

export const ListItem = styled.li`
  font-size: 14px;
  padding: 8px;
  margin: 0;
  display: flex;
  cursor: pointer;
  opacity: 1;

  &:not(:last-child) {
    border-bottom: 1px solid #d9d9d9;
  }
`

export const ChangeLocale = styled.button`
  font:
    700 16px/16px Lato,
    sans-serif;
  text-align: center;
  width: 100%;
  appearance: none;
  color: #fff;
  background-color: #992e24;
  border: none;
  border-radius: 5px;
  padding: 8px;
  cursor: pointer;

  &:disabled {
    background: #fff;
    color: #ccc;
    border: 1px solid #d9d9d9;
    cursor: default;
  }
`
