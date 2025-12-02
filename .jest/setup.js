import 'jest-styled-components'
import '@testing-library/jest-dom'

jest.mock('next-intl', () => ({
  useLocale: jest.fn(),
  useTranslations: jest.fn()
}))

jest.mock('next-intl/server', () => ({
  getTranslations: jest.fn()
}))

jest.mock('next/navigation', () => ({
  useParams: jest.fn(),
  usePathname: jest.fn(),
  useRouter: jest.fn(() => ({
    push: jest.fn()
  }))
}))
