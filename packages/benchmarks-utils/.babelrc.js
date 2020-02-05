/* eslint-disable func-names */
console.log('loaded:', __filename);
module.exports = {
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-regenerator',
    '@babel/plugin-transform-runtime',
  ],
  presets: [
    '@babel/preset-react',
    ['@babel/preset-env', { modules: false, useBuiltIns: false }],
  ],
};
