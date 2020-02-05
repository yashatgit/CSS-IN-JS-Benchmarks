/* eslint-disable func-names */
console.log('loaded:', __filename);
module.exports = {
  presets: [
    '@babel/preset-react',
    '@emotion/babel-preset-css-prop',
    ['@babel/preset-env', { modules: false, useBuiltIns: false }],
  ],
};
