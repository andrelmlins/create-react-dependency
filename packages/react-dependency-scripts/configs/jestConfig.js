"use strict";

const jestConfig = {
  collectCoverageFrom: ["<rootDir>/src/lib/**/*.{js,jsx}"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": `${__dirname}/jest/babelTransform.js`,
    "^.+\\.css$": `${__dirname}/jest/cssTransform.js`,
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": `${__dirname}/jest/fileTransform.js`
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$"
  ],
  coverageThreshold: {
    global: {
      statements: 85,
      branches: 85,
      lines: 85,
      functions: 85
    }
  }
};

module.exports = jestConfig;
