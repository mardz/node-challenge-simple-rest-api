/* eslint-disable no-undef */
// jest.config.js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/src/**/*.+(spec|test).ts"],
  collectCoverage: true,
  collectCoverageFrom: ["src/components/**/*.ts"],
  coverageDirectory: "coverage",
};
