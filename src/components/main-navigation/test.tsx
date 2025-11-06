import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useTranslations } from 'next-intl'
import { useParams, usePathname } from 'next/navigation'

import { getFileTranslations } from 'utils/test-utils'
import Nav from './'

const defaultLocale = 'pt-BR'

describe('MainNavigation', () => {
  const user = userEvent.setup()

  beforeAll(() => {
    ;(usePathname as jest.Mock).mockImplementation(
      () => `/${defaultLocale}/sobre-mim`
    )
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  it('Should render correctly', () => {
    ;(useTranslations as jest.Mock).mockImplementation(
      () => (key: string) => getFileTranslations(defaultLocale, key)
    )
    ;(useParams as jest.Mock).mockImplementation(() => ({
      locale: defaultLocale
    }))

    const { container } = render(<Nav />)

    expect(container).toMatchSnapshot()
  })

  it('Should render correctly in en', () => {
    ;(useTranslations as jest.Mock).mockImplementation(
      () => (key: string) => getFileTranslations('en', key)
    )
    ;(useParams as jest.Mock).mockImplementation(() => ({
      locale: 'en'
    }))

    const { container } = render(<Nav />)

    expect(container).toMatchSnapshot()
  })

  it('Should set active link correctly', async () => {
    ;(useTranslations as jest.Mock).mockImplementation(
      () => (key: string) => getFileTranslations(defaultLocale, key)
    )
    ;(useParams as jest.Mock).mockImplementation(() => ({
      locale: defaultLocale
    }))

    render(<Nav />)

    await user.click(screen.getByRole('button', { name: /menu/i }))

    expect(
      (await screen.findByRole('link', { name: /sobre mim/i })).children[0]
    ).toHaveStyleRule('width', '100%', {
      modifier: '::after'
    })
  })
})
