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
  rules: {
    '@typescript-eslint/no-require-imports': 0,
    '@typescript-eslint/no-var-requires': 0,
    'comma-dangle': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': ['error'],
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
  },
};
