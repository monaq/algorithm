module.exports = {
    testMatch: [
        '**/__tests__/**/*.+(ts|tsx|js)',
        '**/?(*.)+(spec|test).+(ts|tsx|js)',
    ],
    preset: 'ts-jest',
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    transformIgnorePatterns: ['node_modules/(?!variables/.*)'],
};
