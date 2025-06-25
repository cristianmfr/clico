/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['@clico/eslint/nest.js'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
};
