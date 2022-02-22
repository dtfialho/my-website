module.exports = {
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest']
  },
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.js'],
  moduleNameMapper: {
    '^components(.*)$': '<rootDir>/src/components$1'
  }
}
