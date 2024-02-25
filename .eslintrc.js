module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'airbnb-base',  // baseがないとReactの設定に関するエラーが発生する
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript/base',  // baseがないとReactの設定に関するエラーが発生する
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'class-methods-use-this': 'off',  // staticに関するエラーを無視する
    'import/prefer-default-export': 'off',  // default-exportのエラーを無視する
  },
};
