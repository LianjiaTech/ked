const eslintrc = {
    extends: [
      'airbnb',
      'prettier',
      'plugin:jest/recommended',
      'plugin:react/recommended',
      'plugin:import/typescript',
    ],
    env: {
      browser: true,
      node: true,
      jasmine: true,
      jest: true,
      es6: true,
    },
    settings: {
      react: {
        version: '16.14',
      },
    },
    parser: '@typescript-eslint/parser',
    plugins: ['markdown', 'react', 'babel', 'jest', '@typescript-eslint'],
    // https://github.com/typescript-eslint/typescript-eslint/issues/46#issuecomment-470486034
    overrides: [
      {
        files: ['*.ts', '*.tsx'],
        rules: {
          'no-unused-expressions': 'off',
          '@typescript-eslint/no-unused-expressions': 2,
          '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
        },
      },
    ],
    rules: {
      camelcase: 0,
      'react/jsx-one-expression-per-line': 0,
      'react/prop-types': 0,
      'react/forbid-prop-types': 0,
      'react/jsx-indent': 0,
      'react/jsx-wrap-multilines': ['error', { declaration: false, assignment: false }],
      'react/state-in-constructor': 0,
      'react/jsx-no-bind': 0,
      'react/no-unused-prop-types': 0,
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            'site/**',
            'tests/**',
            'scripts/**',
            '**/*.test.js',
            '**/__tests__/*',
            '*.config.js',
            '**/*.md',
          ],
        },
      ],
      'import/extensions': 0,
      'import/no-unresolved': [
        0,
        {
          ignore: ['@ke/ked'],
        },
      ],
      'react/jsx-filename-extension': 0,
      'jsx-a11y/no-static-element-interactions': 0,
      'react/jsx-props-no-spreading': 0,
      'react/require-default-props': 0,
      'react/default-props-match-prop-types': 0,
      'import/no-cycle': 0,
      'react/no-find-dom-node': 0,
      'no-underscore-dangle': 0,
      'react/sort-comp': 0,
      'prefer-destructuring': 0, // TODO: remove later
      'consistent-return': 0, // TODO: remove later
      'no-return-assign': 0, // TODO: remove later
      'no-param-reassign': 0, // TODO: remove later
      'jsx-a11y/anchor-has-content': 0,
      'jsx-a11y/click-events-have-key-events': 0,
      'jsx-a11y/anchor-is-valid': 0,
      'comma-dangle': ['error', 'always-multiline'],
      'react/no-unknown-property': [2, { ignore: ['scrollbar-color'] }],
      'jest/no-test-callback': 0,
      'jest/expect-expect': 0,
      'max-classes-per-file': 0,
      // 由于是直接引入antd 导致很多组件没有state
      'react/prefer-stateless-function': 0,
      'react/static-property-placement': 0,
      // hook组件不推荐再用这个校验
      'react/display-name': 0,
      // 从 3.26.20 迁移过来的规则
      'no-plusplus': 0,
      'react/destructuring-assignment': 0,
      'react/no-did-update-set-state': 0,
      'no-continue': 0,
      'jsx-a11y/no-noninteractive-element-interactions': 0,
    },
  }
  
  if (process.env.RUN_ENV === 'DEMO') {
    eslintrc.globals = {
      React: true,
      ReactDOM: true,
      mountNode: true,
    }
  
    Object.assign(eslintrc.rules, {
      indent: 0,
      quotes: [2, 'single'],
      'no-console': 0,
      'no-plusplus': 0,
      'eol-last': 0,
      'no-script-url': 0,
      'prefer-rest-params': 0,
      'react/no-access-state-in-setstate': 0,
      'react/destructuring-assignment': 0,
      'react/no-multi-comp': 0,
      'jsx-a11y/href-no-hash': 0,
      'jsx-a11y/control-has-associated-label': 0,
      // 允许jsx花括号换行
      'react/jsx-curly-newline': 0,
    })
  }
  
  module.exports = eslintrc
  