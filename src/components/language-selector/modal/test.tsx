import { screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTranslate } from 'utils/test-utils'
import { LanguageSelectorProvider } from '../provider'
import Modal from './'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const defaultLocale = 'pt-BR'
const mockFn = jest.fn()

const mockRouter = (props?: any) =>
  useRouter.mockImplementation(() => ({
    locale: defaultLocale,
    locales: ['pt-BR', 'en'],
    pathname: '/test',
    asPath: '/test',
    query: {},
    push: mockFn,
    ...props
  }))

describe('Components/LanguageSelector/Modal', () => {
  it('Should render correctly', () => {
    mockRouter()
    const { container } = renderWithTranslate(
      <LanguageSelectorProvider initialState={{ showModal: true }}>
        <Modal />
      </LanguageSelectorProvider>
    )
    expect(container).toMatchSnapshot()
  })

  it('Should render correctly in en', () => {
    mockRouter({ locale: 'en' })
    const { container } = renderWithTranslate(
      <LanguageSelectorProvider initialState={{ showModal: true }}>
        <Modal />
      </LanguageSelectorProvider>,
      'en'
    )
    expect(container).toMatchSnapshot()
  })

  it('Should render with select language button disabled', () => {
    mockRouter()
    renderWithTranslate(
      <LanguageSelectorProvider initialState={{ showModal: true }}>
        <Modal />
      </LanguageSelectorProvider>
    )
    expect(
      screen.getByRole('button', { name: /Alterar idioma/ })
    ).toBeDisabled()
  })

  it('Should enable button on change selected language', async () => {
    mockRouter()
    renderWithTranslate(
      <LanguageSelectorProvider initialState={{ showModal: true }}>
        <Modal />
      </LanguageSelectorProvider>
    )
    userEvent.click(screen.getByRole('button', { name: /Active locale/ }))
    userEvent.click(await screen.findByText('en'))
    expect(
      screen.getByRole('button', { name: /Alterar idioma/ })
    ).not.toBeDisabled()
  })

  it('Should redirect to next location on change language and close modal modal', async () => {
    mockRouter()
    await act(async () => {
      renderWithTranslate(
        <LanguageSelectorProvider initialState={{ showModal: true }}>
          <Modal />
        </LanguageSelectorProvider>
      )
      userEvent.click(screen.getByRole('button', { name: /Active locale/ }))
      userEvent.click(await screen.findByText('en'))
      userEvent.click(
        await screen.findByRole('button', { name: /Alterar idioma/ })
      )
    })
    expect(mockFn).toHaveBeenCalled()
    expect(
      screen.queryByText('Selecione a sua linguagem')
    ).not.toBeInTheDocument()
  })
})
