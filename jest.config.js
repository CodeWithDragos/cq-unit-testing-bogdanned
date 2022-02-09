module.exports = {
  "preset": "ts-jest/presets/js-with-ts",
  "testEnvironment": "jest-environment-node",  
  "moduleFileExtensions": ['js', 'jsx', 'ts', 'tsx', 'json', 'node',"d.ts"],
  "verbose": true,
  "collectCoverage":true,
  "collectCoverageFrom": [
    "./src/**/*.{js,ts}",
    "!**/*types.ts",
    "!**/index.ts",
    "!**/node_modules/**",
  ],
  "coverageThreshold": {
    "global": {
      "branches": 100,
      "functions": 80,
      "lines": 80,
      "statements": 80
    }
  }
};