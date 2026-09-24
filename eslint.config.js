// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const eslintConfigPrettier = require('eslint-config-prettier');
const simpleImportSort = require('eslint-plugin-simple-import-sort');

module.exports = defineConfig([
  expoConfig,
  eslintConfigPrettier,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react$', '^react-native$'],
            ['^expo$', '^expo-', '^@expo/'],
            ['^@?\\w'],
            ['^@/'],
            ['^\\.(?!.*(styles(\\.(ts|tsx|js|jsx))?$|\\.(css|scss|png|jpe?g|gif|svg|webp)$))'],
            ['\\.css$', '\\.scss$', '(^|/)styles$'],
            ['\\.(png|jpe?g|gif|svg|webp)$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
  {
    ignores: ['.expo/*', 'node_modules/*', 'web-build/*', 'dist/*'],
  },
]);
