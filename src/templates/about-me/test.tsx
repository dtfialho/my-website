import { screen, render } from '@testing-library/react'
import * as Header from 'components/header'
import * as SocialMedia from 'components/social-media'
import Template from './'

jest.mock('components/header')
const mockedHeader = Header.default as jest.Mock
jest.mock('components/social-media')
const mockedContact = SocialMedia.default as jest.Mock

describe('Templates/AboutMe', () => {
  it('Should render correctly', () => {
    mockedHeader.mockImplementation(() => <header>Header</header>)
    mockedContact.mockImplementation(() => <section>Social media</section>)

    const { container } = render(<Template />)
    expect(
      screen.getByRole('img', { name: /Minha foto de perfil/ })
    ).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
