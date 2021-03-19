module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  //should not have react plugin since not using it and link prettier
  extends: ["eslint:recommended", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
};
