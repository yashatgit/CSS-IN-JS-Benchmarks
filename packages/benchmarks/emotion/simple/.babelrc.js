/* eslint-disable func-names */
console.log('loaded:', __filename);
module.exports = {
  plugins: ['babel-plugin-emotion'],
  presets: [
    '@babel/preset-react',
    ['@babel/preset-env', { modules: false, useBuiltIns: false }],
  ],
};
