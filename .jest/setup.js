import 'jest-styled-components'
import '@testing-library/jest-dom'

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    return <img {...props} />
  }
}))
