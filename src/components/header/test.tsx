import { render } from '@testing-library/react'
import { useTranslations } from 'next-intl'

import { getFileTranslations } from 'utils/test-utils'
import * as MainNavigation from 'components/main-navigation'
import Header from './'

jest.mock('components/main-navigation')
const mockedNavigation = MainNavigation.default as jest.Mock

describe('Components/Header', () => {
  it('Should render correctly', () => {
    ;(useTranslations as jest.Mock).mockImplementation(
      () => (key: string) => getFileTranslations('pt-BR', key)
    )

    mockedNavigation.mockImplementation(() => <nav>Navigation!</nav>)

    const { container } = render(<Header />)
    expect(container).toMatchSnapshot()
  })
})
