const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './'
})

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^components(.*)$': '<rootDir>/src/components$1',
    '^lib(.*)$': '<rootDir>/src/lib$1',
    '^messages$': '<rootDir>/messages$1',
    '^utils(.*)$': '<rootDir>/src/utils$1'
  },
  testPathIgnorePatterns: ['node_modules', '.next'],
  watchPathIgnorePatterns: ['.next'],
  testEnvironmentOptions: {
    customExportConditions: ['']
  },
  coveragePathIgnorePatterns: ['node_modules', '.next']
}

module.exports = createJestConfig(customJestConfig)
