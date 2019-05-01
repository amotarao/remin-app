module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  "plugins": [
    "@typescript-eslint",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "sourceType": "module",
    "project": "./tsconfig.json",
  },
  "rules": {
    'prettier/prettier': [
      'error',
      {
        'singleQuote': true,
        'semi': true,
        'trailingComma': 'es5',
      },
    ],
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
  },
}
