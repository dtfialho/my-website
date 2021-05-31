import { render, screen } from '@testing-library/react'
import { TweenMax } from 'gsap'
import Template from './'

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "",
      pathname: "",
      query: "",
      asPath: ""
    }
  }
}))

const useRouter = jest.spyOn(require("next/router"), "useRouter")
jest.spyOn(TweenMax, 'to')

describe('Templates/Home', () => {
  useRouter.mockImplementation(() => ({
    asPath: '/'
  }))

  beforeEach(() => {
    jest.useFakeTimers()
  })

  it('Should render correctly', async () => {
    render(<Template />)
    jest.runAllTimers()

    expect(TweenMax.to).toHaveBeenCalled()
    expect(await screen.findByRole('heading', { name: /Diego T. Fialho/ })).toBeInTheDocument()
    expect(screen.getByText(/Front End Web Developer/)).toBeInTheDocument()
  })
})
