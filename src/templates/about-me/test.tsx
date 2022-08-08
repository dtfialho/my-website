import { renderWithTranslate } from 'utils/test-utils'
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

    const { container } = renderWithTranslate(<Template />)
    expect(container).toMatchSnapshot()
  })

  it('Should render correctly in en', () => {
    mockedHeader.mockImplementation(() => <header>Header</header>)
    mockedContact.mockImplementation(() => <section>Social media</section>)

    const { container } = renderWithTranslate(<Template />, 'en')
    expect(container).toMatchSnapshot()
  })
})
