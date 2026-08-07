module.exports = {
  // Tell Jest to use ts-jest for TypeScript files
  preset: 'ts-jest',
  
  // The test environment (Node.js for backend)
  testEnvironment: 'node',
  
  // Module name mapper for better TypeScript support
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  
  // Where to find test files
  testMatch: [
    '**/__tests__/**/*.ts',
    '**/?(*.)+(spec|test).ts'
  ],
  
  // Files to collect coverage from
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.d.ts'
  ],
  
  // Coverage thresholds (optional - commented out for now)
  // coverageThreshold: {
  //   global: {
  //     branches: 80,
  //     functions: 80,
  //     lines: 80,
  //     statements: 80
  //   }
  // },
  
  // Clear mocks between tests
  clearMocks: true,
  
  // Verbose output (shows each test)
  verbose: true,
  
  // Transform files with ts-jest
  transform: {
    '^.+\\.ts$': 'ts-jest'
  }
};
