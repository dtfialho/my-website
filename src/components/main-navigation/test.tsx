import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTranslate } from 'utils/test-utils'
import Nav from './'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '',
      pathname: '',
      query: '',
      asPath: ''
    }
  }
}))

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('MainNavigation', () => {
  it('Should render correctly', () => {
    useRouter.mockImplementation(() => ({
      asPath: '/',
      locale: 'pt-BR'
    }))

    const { container } = renderWithTranslate(<Nav />)

    expect(container).toMatchSnapshot()
  })

  it('Should render correctly in en', () => {
    useRouter.mockImplementation(() => ({
      asPath: '/',
      locale: 'en'
    }))

    const { container } = renderWithTranslate(<Nav />, 'en')

    expect(container).toMatchSnapshot()
  })

  it('Should set active link correctly', () => {
    useRouter.mockImplementation(() => ({
      asPath: '/about-me'
    }))

    renderWithTranslate(<Nav />)

    userEvent.click(screen.getByRole('button', { name: /Menu/ }))

    expect(screen.getByRole('link', { name: /Sobre mim/ })).toHaveStyleRule(
      'width',
      '100%',
      {
        modifier: '::after'
      }
    )
  })
})
