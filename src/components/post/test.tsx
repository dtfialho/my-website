import { render, screen } from '@testing-library/react'
import format from 'date-fns/format'
import { getTranslations } from 'next-intl/server'

import { getFileTranslations } from 'utils/test-utils'
import Post from './'

const data: PostType = {
  slug: 'slug-for-test',
  date: '2022-05-27T00:00:00-03:00',
  hero_image: '/img/bg.jpg',
  title: 'Some title for testing',
  excerpt: 'lorem ipsum dolor sit amet'
}

describe('components/post', () => {
  afterAll(() => {
    jest.clearAllMocks()
  })

  it('Should render correctly', async () => {
    const locale = 'pt-BR'

    ;(getTranslations as jest.Mock).mockImplementation(
      () => (key: string) => getFileTranslations(locale, key)
    )
    const component = await Post({ ...data, locale })
    const { container } = render(component)

    expect(container).toMatchSnapshot()
  })

  it('Should render correctly in en', async () => {
    const locale = 'en'

    ;(getTranslations as jest.Mock).mockImplementation(
      () => (key: string) => getFileTranslations(locale, key)
    )

    const component = await Post({ ...data, locale })

    const { container } = render(component)

    expect(container).toMatchSnapshot()
  })

  it('Should render with the correct given props', async () => {
    const locale = 'pt-BR'

    ;(getTranslations as jest.Mock).mockImplementation(
      () => (key: string) => getFileTranslations(locale, key)
    )
    const parsedDate = format(new Date(data.date), 'dd/MM/yyyy')

    const component = await Post({ ...data, locale })

    render(component)

    const linkRegex = new RegExp(data.title, 'i')

    expect(screen.getByRole('link', { name: linkRegex })).toHaveAttribute(
      'href',
      `/${locale}/blog/${data.slug}`
    )
    expect(screen.getByAltText(data.title)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: data.title })
    ).toBeInTheDocument()
    expect(screen.getByText(data.excerpt)).toBeInTheDocument()
    expect(screen.getByText(parsedDate)).toBeInTheDocument()
  })
})
