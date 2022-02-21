import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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
      asPath: '/'
    }))

    const { container } = render(<Nav />)

    expect(container).toMatchSnapshot()
  })

  it('Should set active link correctly', () => {
    useRouter.mockImplementation(() => ({
      asPath: '/about-me'
    }))

    render(<Nav />)

    userEvent.click(screen.getByRole('button', { name: /Menu/ }))

    expect(screen.getByRole('link', { name: /Sobre Mim/ })).toHaveStyleRule(
      'width',
      '100%',
      {
        modifier: '::after'
      }
    )
  })
})
