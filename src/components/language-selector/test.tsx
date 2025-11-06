import { screen, render } from '@testing-library/react'
import { useParams } from 'next/navigation'

import LanguageSelector from './'

const defaultLocale = 'pt-BR'

describe('components/LanguageSelector', () => {
  beforeAll(() => {
    ;(useParams as jest.Mock).mockImplementation(() => ({
      locale: defaultLocale
    }))
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  it('Should match snapshot', () => {
    const { container } = render(<LanguageSelector />)

    expect(container).toMatchSnapshot()
  })

  it('Should render the correct active language flag', () => {
    render(<LanguageSelector />)

    expect(
      screen.getByAltText(`Active language ${defaultLocale}`)
    ).toBeInTheDocument()
  })
})
