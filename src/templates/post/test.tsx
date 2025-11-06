import format from 'date-fns/format'
import { render, screen } from '@testing-library/react'
import { getTranslations } from 'next-intl/server'

import { getFileTranslations } from 'utils/test-utils'
import * as Header from 'components/header'
import Post, { PostProps } from './'

jest.mock('remark-gfm', () => ({}))
jest.mock('rehype-raw', () => ({}))

jest.mock('components/header')
const mockedHeader = Header.default as jest.Mock
mockedHeader.mockImplementation(() => <header>Header</header>)

const defaultLocale = 'pt-BR'

const postProps: PostProps = {
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugit numquam tempora voluptatum voluptas in, doloremque maiores natus cum voluptate culpa perferendis ipsam pariatur unde optio id amet dolorum inventore.',
  title: 'Luke is comming! :D',
  date: '2022-06-29T00:00:00-03:00',
  hero_image: '/img/bg.jpg',
  locale: defaultLocale
}

describe('Templates/Post', () => {
  it('Should render correctly', async () => {
    ;(getTranslations as jest.Mock).mockImplementation(
      () => (key: string) => getFileTranslations(defaultLocale, key)
    )

    const component = await Post({ ...postProps, locale: defaultLocale })
    const { container } = render(component)

    expect(container).toMatchSnapshot()
  })

  it('Should render correctly in en', async () => {
    ;(getTranslations as jest.Mock).mockImplementation(
      () => (key: string) => getFileTranslations('en', key)
    )

    const component = await Post({ ...postProps, locale: 'en' })
    const { container } = render(component)

    expect(container).toMatchSnapshot()
  })

  it('Should render the passed props correctly', async () => {
    ;(getTranslations as jest.Mock).mockImplementation(
      () => (key: string) => getFileTranslations(defaultLocale, key)
    )

    const parsedDate = format(new Date(postProps.date), 'dd/MM/yyyy')
    const dateRegex = new RegExp(parsedDate)

    const component = await Post({ ...postProps, locale: defaultLocale })
    render(component)

    expect(await screen.findByRole('heading', { name: postProps.title }))
    expect(screen.queryByText(dateRegex)).toBeInTheDocument()
    expect(screen.getByText(postProps.content)).toBeInTheDocument()
  })
})
