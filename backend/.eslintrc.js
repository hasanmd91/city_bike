module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  eslintIgnore: ['*.js'],

  rules: {
    '@typescript-eslint/no-require-imports': 0,
    '@typescript-eslint/no-var-requires': 0,
    'comma-dangle': 0,
  },
};
