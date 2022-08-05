import { screen } from '@testing-library/react'
import format from 'date-fns/format'

import { renderWithTranslate } from 'utils/test-utils'
import Post, { PostType } from './'

const data: PostType = {
  slug: 'slug-for-test',
  date: '2022-05-27T00:00:00-03:00',
  hero_image: '/img/bg.jpg',
  title: 'Some title for testing',
  excerpt: 'lorem ipsum dolor sit amet'
}

describe('Components/Post', () => {
  it('Should render correctly', () => {
    const { container } = renderWithTranslate(<Post {...data} />)
    expect(container).toMatchSnapshot()
  })

  it('Should render correctly in en', () => {
    const { container } = renderWithTranslate(<Post {...data} />)
    expect(container).toMatchSnapshot()
  })

  it('Should render with the correct given props', () => {
    const parsedDate = format(new Date(data.date), 'dd/MM/yyyy')

    renderWithTranslate(<Post {...data} />)

    expect(screen.getByRole('link', { name: data.title })).toHaveAttribute(
      'href',
      `/blog/${data.slug}`
    )
    expect(screen.getByAltText(data.title)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: data.title })
    ).toBeInTheDocument()
    expect(screen.getByText(data.excerpt)).toBeInTheDocument()
    expect(screen.getByText(parsedDate)).toBeInTheDocument()
  })
})
