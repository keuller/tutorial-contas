const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer({
  presets: [require.resolve('babel-preset-es2015')],
  plugins: [require.resolve('babel-plugin-transform-flow-strip-types')],
  babelrc: false
});