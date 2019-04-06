const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.tsx'),

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      "@components": path.resolve(__dirname, 'src/components')
    }
  },

  module: {
    rules: [{  test: /\.tsx?$/,
      loader: 'awesome-typescript-loader', exclude: /node_modules/ }],
  },

  plugins: [
    new CheckerPlugin(),
  ]
};