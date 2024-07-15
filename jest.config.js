const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './'
})

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^locales$': '<rootDir>/locales$1',
    '^components(.*)$': '<rootDir>/src/components$1',
    '^utils(.*)$': '<rootDir>/src/utils$1',
    'react-markdown':
      '<rootDir>/node_modules/react-markdown/react-markdown.min.js'
  },
  testPathIgnorePatterns: ['node_modules', '.next'],
  watchPathIgnorePatterns: ['.next'],
  testEnvironmentOptions: {
    customExportConditions: ['']
  },
  coveragePathIgnorePatterns: ['node_modules', '.next']
}

module.exports = createJestConfig(customJestConfig)
