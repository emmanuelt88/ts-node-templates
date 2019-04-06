var fs = require('fs');
var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: './src/index.ts',
  output: {
    path: __dirname + '/dist',
    filename: 'index.js',
    libraryTarget: 'commonjs2',
    library: "@ts-template/ts-node-library"
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
    ]
  },
  resolve: {
    extensions: ['.ts']
  },
  target: 'node',
  externals: nodeModules,
};