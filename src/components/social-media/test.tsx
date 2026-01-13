import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import SocialMedia from './'

describe('Components/SocialMedia', () => {
  const user = userEvent.setup()

  it('Should render correctly', () => {
    const { container } = render(<SocialMedia />)

    expect(container).toMatchSnapshot()
  })

  it('Should apply inverse class correctly if inverseColorToBlack is true', async () => {
    render(<SocialMedia inverseColorToBlack />)

    expect(
      screen.getByRole('link', { name: /Github/ }).parentElement
    ).toHaveClass('inverse-color')
    expect(
      screen.getByRole('link', { name: /Linkedin/ }).parentElement
    ).toHaveClass('inverse-color')
    expect(
      screen.getByRole('link', { name: /Twitter/ }).parentElement
    ).toHaveClass('inverse-color')
  })
})
