import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.nav<{ open: boolean }>`
  ${({ open }) => css`
    ${open && css`
      ${media.lessThan('medium')`
        position: fixed;
        background-color: rgba(0, 0, 0, 0.8);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        display: flex;
        transition: .3s ease-in-out;
      `}
    `}
  `}
`

export const Hamburger = styled.button`
  appearance: none;
  border: none;
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

  ${media.greaterThan('medium')`
    display: none;
  `}
`

const iconModifiers = {
  open: () => css`
    transform: rotate(45deg);

    &::before {
      transform: rotate(90deg);
      top: 0;
    }

    &::after {
      transform: rotate(90deg);
      bottom: 0;
    }
  `
}

export const Icon = styled.span<{ open: boolean }>`
  ${({ open }) => css`
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

    ${open && iconModifiers.open()}
  `}
`

const containerModifiers = {
  open: () => css`
    visibility: visible;
    opacity: 1;
    height: auto;
  `
}

export const Container = styled.ul<{ open: boolean }>`
  ${({ open }) => css`
    visibility: hidden;
    opacity: 0;
    list-style: none;
    align-self: center;
    margin: 0 auto;
    height: 0;

    ${media.greaterThan('medium')`
      max-width: 1200px;
      width: auto;
      height: auto;
      display: block;
      visibility: visible;
      opacity: 1;
    `}

    ${open && containerModifiers.open()}
  `}
`

export const Item = styled.li`
  display: block;
  text-align: center;

  ${media.greaterThan('medium')`
    display: inline-block;
    padding: 0 20px;
  `}

  ${media.lessThan('medium')`
    margin-bottom: 5px;
  `}
`

export const Link = styled.a<{ active: boolean }>`
  ${({ active }) => css`
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 20px;
    position: relative;

    &:hover::after {
      width: 100%;
    }

    &::after {
      display: block;
      width: ${active ? '100%' : '0' };
      height: 2px;
      transition: width 0.3s ease-in-out;
      background-color: #fff;
      content: '';

      ${media.lessThan('medium')`
        margin-top: 5px;
      `}
    }
  `}
`
