import { act } from 'react'
import { render, screen } from '@testing-library/react'
import gsap from 'gsap'
import { useTranslations } from 'next-intl'

import { getFileTranslations } from 'utils/test-utils'
import * as Header from 'components/header'
import Home from './'

jest.mock('components/header')
const mockedHeader = Header.default as jest.Mock

jest.spyOn(gsap, 'to')

describe('Templates/Home', () => {
  beforeAll(() => {
    mockedHeader.mockImplementation(() => <header>Header</header>)
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  it('Should render correctly', () => {
    jest.useFakeTimers()
    ;(useTranslations as jest.Mock).mockImplementation(
      () => (key: string) => getFileTranslations('pt-BR', key)
    )

    act(() => {
      render(<Home />)
      jest.runAllTimers()
    })

    expect(gsap.to).toHaveBeenCalled()
    expect(screen.getByText(/Desenvolvedor Front End/)).toBeInTheDocument()
  })

  it('Should render correctly in en', () => {
    jest.useFakeTimers()
    ;(useTranslations as jest.Mock).mockImplementation(
      () => (key: string) => getFileTranslations('en', key)
    )

    act(() => {
      render(<Home />)
      jest.runAllTimers()
    })

    expect(gsap.to).toHaveBeenCalled()
    expect(screen.getByText(/Front End Web Developer/)).toBeInTheDocument()
  })
})
