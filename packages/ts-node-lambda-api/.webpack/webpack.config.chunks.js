var fs = require('fs');
const nodeExternals = require('webpack-node-externals');
const WebPackScripts = require('./scripts');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: WebPackScripts.getPaths(),
  output: {
    path: __dirname + '/../dist/controllers',
    libraryTarget: 'commonjs2',
    library: '',
    chunkFilename: 'index.js',
  },
  optimization: {
    minimize: true,
    splitChunks: { 
      chunks: (chunk) => {
        return [].indexOf(chunk.name) < 0;
      },
      name: 'vendor'
    },
  },
  resolve: {
    extensions: WebPackScripts.getExtensions(),
    alias: WebPackScripts.getAliasList()
  },
  module: {
    rules: WebPackScripts.getRules()
  },
  target: 'node',
  externals: [nodeExternals()],
};