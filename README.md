# `@santospatrick/eslint-config-react`
:barber: Simple eslint config for React.js

## Usage

1. Install
```sh
yarn add @santospatrick/eslint-config-react @santospatrick/prettier-config --dev
```

2. Create a file `.eslintrc` and add this:
```
{
    "extends": "@santospatrick/eslint-config-react"
}
```

3. Add this line at `package.json`
```diff
...
+ "prettier": "@santospatrick/prettier-config"
...
```

## Create React App
If you are using [create-react-app](https://create-react-app.dev/), remove the following lines at `package.json`:

```diff
...
- "eslintConfig": {
-   "extends": "react-app"
- },
...
```

## Development

```sh
yarn link
cd /path/to/project
yarn link @santospatrick/eslint-config-react

# Deploy
# This command will also publish do Yarn
npm publish --access public
```
