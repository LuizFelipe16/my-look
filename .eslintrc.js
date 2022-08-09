module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020, // enable parsing latest ECMAScript
    sourceType: 'module', // allow use of imports
  },
  plugins: ['react', 'next', '@typescript-eslint', 'jest', ''],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {
    // here add any ESlint rules to overwrite those
    // from the recommended extensions
    'prettier/prettier': ['error', { endOfLine: 'on' }],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    quotes: ['error', 'single'],
  },
}
