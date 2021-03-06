module.exports = {
  env: {
    es2021: true,
    node: true,
    browser: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 0,
    'no-console': 'off',
  },
};
// extends: ["airbnb-base", "plugin:prettier/recommended"],
