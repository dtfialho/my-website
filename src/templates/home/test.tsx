import { render, screen } from '@testing-library/react'
import { TweenMax } from 'gsap'
import * as Header from 'components/header'
import Template from './'

jest.mock('components/header')
const mockedHeader = Header.default as jest.Mock

jest.spyOn(TweenMax, 'to')

describe('Templates/Home', () => {
  it('Should render correctly', async () => {
    jest.useFakeTimers()
    mockedHeader.mockImplementation(() => <header>Header</header>)

    render(<Template />)
    jest.runAllTimers()

    expect(TweenMax.to).toHaveBeenCalled()
    expect(screen.getByText(/Diego T. Fialho/)).toBeInTheDocument()
    expect(screen.getByText(/Front End Web Developer/)).toBeInTheDocument()
  })
})
