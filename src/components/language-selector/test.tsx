import { screen, render } from '@testing-library/react'

import LanguageSelector from './'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const defaultLocale = 'pt-BR'

describe('components/LanguageSelector', () => {
  it('Should match snapshot', () => {
    useRouter.mockImplementation(() => ({
      locale: defaultLocale
    }))

    const { container } = render(<LanguageSelector />)

    expect(container).toMatchSnapshot()
  })

  it('Should render the correct active language flag', () => {
    useRouter.mockImplementation(() => ({
      locale: defaultLocale
    }))

    render(<LanguageSelector />)

    expect(
      screen.getByAltText(`Active language ${defaultLocale}`)
    ).toBeInTheDocument()
  })
})
