import { screen, act } from '@testing-library/react'
import gsap from 'gsap'

import { renderWithTranslate } from 'utils/test-utils'
import * as Header from 'components/header'
import Home from './'

jest.mock('components/header')
const mockedHeader = Header.default as jest.Mock

jest.spyOn(gsap, 'to')

describe('Templates/Home', () => {
  it('Should render correctly', () => {
    jest.useFakeTimers()
    mockedHeader.mockImplementation(() => <header>Header</header>)

    act(() => {
      renderWithTranslate(<Home />)
      jest.runAllTimers()
    })

    expect(gsap.to).toHaveBeenCalled()
    expect(screen.getByText(/Desenvolvedor Front End/)).toBeInTheDocument()
  })

  it('Should render correctly in en', () => {
    jest.useFakeTimers()
    mockedHeader.mockImplementation(() => <header>Header</header>)

    act(() => {
      renderWithTranslate(<Home />, 'en')
      jest.runAllTimers()
    })

    expect(gsap.to).toHaveBeenCalled()
    expect(screen.getByText(/Front End Web Developer/)).toBeInTheDocument()
  })
})
