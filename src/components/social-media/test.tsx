import { render, screen, fireEvent } from '@testing-library/react'
import SocialMedia from './'

describe('Components/SocialMedia', () => {
  it('Should render correctly', () => {
    const { container } = render(<SocialMedia />)

    expect(container).toMatchSnapshot()
  })

  it('Should link applies opacity on hover', async () => {
    render(<SocialMedia />)
    fireEvent.focus(screen.getByRole('link', { name: /Github/ }))

    expect(await screen.findByRole('link', { name: /Github/ })).toHaveStyleRule(
      'opacity',
      '0.5',
      {
        modifier: ':focus'
      }
    )
  })
})
