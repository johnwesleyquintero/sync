module.exports = {
  transform: {
    "^.+\\.(ts|tsx)?$": "@swc/jest",
    "^.+\\.(js|jsx)$": "@swc/jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/lib/(.*)$": "<rootDir>/lib/$1",
    "^@/hooks/(.*)$": "<rootDir>/hooks/$1",
  },
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["/node_modules/(?!@radix-ui)/"],
  setupFilesAfterEnv: ["<rootDir>/test/setupTests.js"],
  globals: {},
  extensionsToTreatAsEsm: [".jsx", ".ts"],
};
