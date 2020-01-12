module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended'
    ],
    env: {
        browser: true,
        es6: true,
        node: true,
        jest: true,
        node: true
    },
    parser: 'babel-eslint',
    plugins: ['react'],
    rules: {
        'react/prop-types': 'off'
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
}