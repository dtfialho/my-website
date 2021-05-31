import { render, screen } from '@testing-library/react'
import { TweenMax } from 'gsap'
import * as Header from 'components/header'
import Template from './'

jest.mock('components/header')
const mockedNavigation = Header.default as jest.Mock

jest.spyOn(TweenMax, 'to')

describe('Templates/Home', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  it('Should render correctly', async () => {
    mockedNavigation.mockImplementation(() => <header>Header!</header>)

    render(<Template />)
    jest.runAllTimers()

    expect(TweenMax.to).toHaveBeenCalled()
    expect(await screen.findByRole('heading', { name: /Diego T. Fialho/ })).toBeInTheDocument()
    expect(screen.getByText(/Front End Web Developer/)).toBeInTheDocument()
  })
})
