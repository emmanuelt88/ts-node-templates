var fs = require('fs');
const path = require('path');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: __dirname + '/../src/app/api/local.ts',
  output: {
    path: __dirname + '/../dist',
    filename: 'api.js',
    libraryTarget: 'commonjs2',
    library: '',
  },
  node: {
    __dirname: false
  },
  resolve: {
    // Add '.ts' and '.tsx' as a resolvable extension.
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
    ]
  },
  target: 'node',
  externals: nodeModules,
};