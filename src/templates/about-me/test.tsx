import { useTranslations } from 'next-intl'
import { render } from '@testing-library/react'

import { getFileTranslations } from 'utils/test-utils'
import * as Header from 'components/header'
import * as SocialMedia from 'components/social-media'
import Template from './'

jest.mock('components/header')
const mockedHeader = Header.default as jest.Mock
jest.mock('components/social-media')
const mockedContact = SocialMedia.default as jest.Mock

describe('Templates/AboutMe', () => {
  beforeAll(() => {
    mockedHeader.mockImplementation(() => <header>Header</header>)
    mockedContact.mockImplementation(() => <section>Social media</section>)
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  it('Should render correctly', () => {
    ;(useTranslations as jest.Mock).mockImplementation(
      () => (key: string) => getFileTranslations('pt-BR', key)
    )
    const { container } = render(<Template />)
    expect(container).toMatchSnapshot()
  })

  it('Should render correctly in en', () => {
    ;(useTranslations as jest.Mock).mockImplementation(
      () => (key: string) => getFileTranslations('en', key)
    )

    const { container } = render(<Template />)
    expect(container).toMatchSnapshot()
  })
})
