module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 'off',
    'arrow-body-style': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    // 'no-param-reassign': [2, { props: false }], // Eslint assignment to property of function parameter 'state' error for reducers
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'global-require': 0
  },
  overrides: [
    {
      files: ['**/*.spec.js', '**/*.spec.jsx'],
      env: {
        jest: true
      }
    }
  ]
};
