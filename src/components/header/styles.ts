import styled, { css } from 'styled-components'

const wrapperModifiers = {
  fixed: () => css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
  `
}

interface WrapperProps {
  fixed: boolean
}

export const Wrapper = styled.header<WrapperProps>`
  ${({ fixed }) => css`
    width: 100vw;
    padding: 20px 40px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;

    ${fixed && wrapperModifiers.fixed()}
  `}
`

export const LogoLink = styled.span`
  svg {
    width: 50px;
  }
`
