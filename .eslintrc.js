module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  "plugins": [
    "@typescript-eslint",
    "react",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module",
    "project": "./tsconfig.json",
  },
  "env": {
    "browser": true,
    "node": true,
  },
  "rules": {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "react/prop-types": "off",
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "semi": true,
        "trailingComma": "es5",
      },
    ],
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
  },
}
