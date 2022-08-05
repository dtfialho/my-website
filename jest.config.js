const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './'
})

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.js'],
  moduleNameMapper: {
    '^locales$': '<rootDir>/locales$1',
    '^components(.*)$': '<rootDir>/src/components$1',
    '^utils(.*)$': '<rootDir>/src/utils$1',
    'react-markdown':
      '<rootDir>/node_modules/react-markdown/react-markdown.min.js'
  }
}

module.exports = createJestConfig(customJestConfig)
