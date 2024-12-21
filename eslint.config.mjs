import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
})

const eslintConfig = [
  ...compat.config({
    extends: ['eslint:recommended', 'next/core-web-vitals', 'next/typescript', 'prettier'],
    rules: {
      camelcase: 'error',
      'default-case': 'error',
      'default-case-last': 'error',
      'default-param-last': 'warn',
      'dot-notation': 'error',
      eqeqeq: 'error',
      'max-classes-per-file': ['error', 1],
      'new-cap': 'error',
      'no-duplicate-imports': [
        'error',
        {
          includeExports: true,
        },
      ],
      'no-else-return': 'error',
      'no-empty-function': 'warn',
      'no-eq-null': 'error',
      'no-lonely-if': 'error',
      'no-throw-literal': 'error',
      'prefer-const': 'error',
      'prefer-template': 'warn',
      'require-await': 'error',
      'sort-vars': 'warn',
      yoda: 'warn',
    },
  }),
]

export default eslintConfig
