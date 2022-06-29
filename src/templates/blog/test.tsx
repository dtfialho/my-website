import React from 'react'
import format from 'date-fns/format'
import { screen, render } from '@testing-library/react'

import * as Header from 'components/header'
import { PostType } from 'components/post'
import Blog from './'

jest.mock('components/header')
const mockedHeader = Header.default as jest.Mock
mockedHeader.mockImplementation(() => <header>Header</header>)

describe('Templates/Blog', () => {
  it('Should display post list correctly', () => {
    const posts: Array<PostType> = [
      {
        slug: 'slug-for-test',
        date: '2022-05-27T00:00:00-03:00',
        hero_image: '/img/bg.jpg',
        title: 'Some title for testing',
        excerpt: 'lorem ipsum dolor sit amet'
      },
      {
        slug: 'second-slug-for-test',
        date: '2022-06-29T00:00:00-03:00',
        hero_image: '/img/bg.jpg',
        title: 'Some other title for testing',
        excerpt: 'the other lorem ipsum dolor sit amet'
      }
    ]
    render(<Blog posts={posts} />)

    posts.forEach(({ title, date, slug, excerpt }) => {
      const parsedDate = format(new Date(date), 'dd/MM/yyyy')

      expect(screen.getByRole('link', { name: title })).toHaveAttribute(
        'href',
        `/blog/${slug}`
      )
      expect(screen.getByAltText(title)).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
      expect(screen.getByText(excerpt)).toBeInTheDocument()
      expect(screen.getByText(parsedDate)).toBeInTheDocument()
    })
  })
})
