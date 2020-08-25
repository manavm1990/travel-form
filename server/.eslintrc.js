module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'consistent-return': 'warn',
    'no-unresolved': '[2, { ignore: ['\.db$'] }]',
  },
};
