/* eslint-disable max-len */
module.exports = {
    setupFiles: [
        "<rootDir>/node_modules/@babel/register",
        "<rootDir>/node_modules/@babel/polyfill",
        "<rootDir>/test/setup-tests.jsx"
    ],
    transform: {
        "^.+\\.js(x)?$": "babel-jest"
    },
    collectCoverageFrom: [
        "**/*.{js,jsx}",
        "!**/node_modules/**",
        "!**/coverage/**",
        "!**/.mocks/**",
        "!**/test/**",
        "!**/dist/**"
    ],
    transformIgnorePatterns: []
};
