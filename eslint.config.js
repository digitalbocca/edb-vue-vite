import path from 'node:path'
import url from 'node:url'
import { FlatCompat } from '@eslint/eslintrc'
import vue from 'eslint-plugin-vue'
import globals from 'globals'
import * as depend from 'eslint-plugin-depend'
import { flatConfigs } from 'eslint-plugin-import-x'

export default [
  depend.configs['flat/recommended'],
  ...vue.configs['flat/recommended'],
  ...(new FlatCompat({
    baseDirectory: path.dirname(url.fileURLToPath(import.meta.url))
  }).extends('eslint-config-standard')),
  flatConfigs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser
      }
    },
    plugins: {
      vue
    },
    settings: {
      'import-x/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.vue', '.ts', '.tsx', '.css', '.sass', '.scss', '.mjs']
        }
      }
    },
    rules: {
      'import-x/order': ['error', {
        groups: [['builtin', 'external', 'internal']],
        'newlines-between': 'always'
      }],
      'import-x/no-duplicates': 'error',
      'import-x/no-self-import': 'error',
      'import-x/no-unresolved': ['error', {
        ignore: [
          '^@/',
          '\\.css$'
        ]
      }],
      'vue/max-attributes-per-line': ['error', {
        singleline: {
          max: 1
        },
        multiline: {
          max: 1
        }
      }],
      'vue/first-attribute-linebreak': ['error', {
        singleline: 'ignore',
        multiline: 'below'
      }],
      'vue/html-indent': ['error', 2, {
        attribute: 1,
        baseIndent: 1,
        closeBracket: {
          startTag: 0
        },
        alignAttributesVertically: false,
        ignores: []
      }],
      'vue/html-closing-bracket-newline': ['error', {
        singleline: 'never',
        multiline: 'always'
      }],
      'vue/html-self-closing': ['error', {
        html: {
          void: 'never',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }]
    }
  },
  {
    ignores: [
      'node_modules/*',
      'dist/*',
      '.env'
    ]
  }
]
