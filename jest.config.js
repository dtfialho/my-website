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
    '^components(.*)$': '<rootDir>/src/components$1',
    'react-markdown':
      '<rootDir>/node_modules/react-markdown/react-markdown.min.js'
  }
}

module.exports = createJestConfig(customJestConfig)
