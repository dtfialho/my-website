import format from 'date-fns/format'
import { screen, render } from '@testing-library/react'

import * as Header from 'components/header'
import Post, { PostProps } from './'

jest.mock('remark-gfm', () => ({}))
jest.mock('rehype-raw', () => ({}))

jest.mock('components/header')
const mockedHeader = Header.default as jest.Mock
mockedHeader.mockImplementation(() => <header>Header</header>)

const postProps: PostProps = {
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugit numquam tempora voluptatum voluptas in, doloremque maiores natus cum voluptate culpa perferendis ipsam pariatur unde optio id amet dolorum inventore.',
  title: 'Luke is comming! :D',
  date: '2022-06-29T00:00:00-03:00',
  hero_image: '/img/bg.jpg'
}

describe('Templates/Post', () => {
  it('Should render correctly', () => {
    const { container } = render(<Post {...postProps} />)
    expect(container).toMatchSnapshot()
  })

  it('Should render the passed props correctly', async () => {
    const parsedDate = format(new Date(postProps.date), 'dd/MM/yyyy')
    const dateRegex = new RegExp(parsedDate)

    render(<Post {...postProps} />)
    expect(await screen.findByRole('heading', { name: postProps.title }))
    expect(screen.queryByText(dateRegex)).toBeInTheDocument()
    expect(screen.getByText(postProps.content)).toBeInTheDocument()
  })
})
