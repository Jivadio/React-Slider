module.exports = {
    testEnvironment: 'jsdom',
    transform: {
        "^.+\\.(js|jsx)$": "babel-jest",
        "^.+\\.css$": "jest-css-modules-transform"
    },
    moduleFileExtensions: ["js", "jsx"],
};
