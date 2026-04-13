import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Load next.config.ts and .env files for the test environment
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  // Map the @/* path alias defined in tsconfig.json
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  // Keep Jest away from the Playwright test suite
  testPathIgnorePatterns: ["/node_modules/", "/.next/", "/tests/"],
};

export default createJestConfig(config);
