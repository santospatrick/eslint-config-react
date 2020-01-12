module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    env: {
        browser: true,
        es6: true,
        node: true
    },
    parser: 'babel-eslint',
    plugins: ['react'],
    rules: {
        'react/prop-types': 'off'
    }
}