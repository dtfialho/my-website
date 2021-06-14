import { render } from '@testing-library/react'
import * as MainNavigation from 'components/main-navigation'
import Header from './'

jest.mock('components/main-navigation')
const mockedNavigation = MainNavigation.default as jest.Mock

describe('Components/Header', () => {
  it('Should render correctly', () => {
    mockedNavigation.mockImplementation(() => <nav>Navigation!</nav>)

    const { container } = render(<Header />)
    expect(container).toMatchSnapshot()
  })
})
