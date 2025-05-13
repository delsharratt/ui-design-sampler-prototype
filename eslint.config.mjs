import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
  {
    ignores: ['node_modules', '.next', 'dist', 'build', 'out']
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      'jsx-a11y': eslintPluginJsxA11y,
      '@typescript-eslint': typescriptEslintPlugin,
      prettier: eslintPluginPrettier
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // Not needed for Next.js
      'react/jsx-props-no-spreading': 'off', // Allow prop spreading
      '@typescript-eslint/no-unused-vars': ['error']
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
];
