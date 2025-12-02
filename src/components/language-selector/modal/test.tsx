import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useTranslations } from 'next-intl'
import { usePathname, useParams, useRouter } from 'next/navigation'

import { getFileTranslations } from 'utils/test-utils'
import { LanguageSelectorProvider } from '../provider'
import Modal from './'

const defaultLocale = 'pt-BR'

describe('Components/LanguageSelector/Modal', () => {
  const user = userEvent.setup()
  const pathname = `/${defaultLocale}/test`

  beforeAll(() => {
    ;(usePathname as jest.Mock).mockImplementation(() => pathname)
    ;(useParams as jest.Mock).mockImplementation(() => ({
      locale: defaultLocale
    }))
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  it('Should render correctly', () => {
    ;(useTranslations as jest.Mock).mockImplementation(
      () => (key: string) => getFileTranslations(defaultLocale, key)
    )

    const { container } = render(
      <LanguageSelectorProvider initialState={{ showModal: true }}>
        <Modal />
      </LanguageSelectorProvider>
    )

    expect(container).toMatchSnapshot()
  })

  it('Should render with select language button disabled', () => {
    ;(useTranslations as jest.Mock).mockImplementation(
      () => (key: string) => getFileTranslations(defaultLocale, key)
    )

    render(
      <LanguageSelectorProvider initialState={{ showModal: true }}>
        <Modal />
      </LanguageSelectorProvider>
    )

    expect(
      screen.getByRole('button', { name: /Alterar idioma/ })
    ).toBeDisabled()
  })

  it('Should enable button on change selected language', async () => {
    ;(useTranslations as jest.Mock).mockImplementation(
      () => (key: string) => getFileTranslations(defaultLocale, key)
    )

    render(
      <LanguageSelectorProvider initialState={{ showModal: true }}>
        <Modal />
      </LanguageSelectorProvider>
    )

    await user.click(screen.getByRole('button', { name: /Active locale/ }))
    await user.click(await screen.findByAltText('en locale flag'))

    expect(
      screen.getByRole('button', { name: /Alterar idioma/ })
    ).not.toBeDisabled()
  })

  it('Should redirect to next location on change language and close modal modal', async () => {
    ;(useTranslations as jest.Mock).mockImplementation(
      () => (key: string) => getFileTranslations(defaultLocale, key)
    )

    const push = jest.fn()

    ;(useRouter as jest.Mock).mockImplementation(() => ({
      push
    }))

    render(
      <LanguageSelectorProvider initialState={{ showModal: true }}>
        <Modal />
      </LanguageSelectorProvider>
    )

    await user.click(screen.getByRole('button', { name: /active locale/i }))
    await user.click(await screen.findByAltText('en locale flag'))
    await user.click(
      await screen.findByRole('button', { name: /alterar idioma/i })
    )

    expect(useRouter().push).toHaveBeenCalledWith('/en/test')
    expect(
      screen.queryByText('Selecione a sua linguagem')
    ).not.toBeInTheDocument()
  })
})
