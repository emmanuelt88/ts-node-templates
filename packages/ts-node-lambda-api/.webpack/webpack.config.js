var fs = require('fs');
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
  entry: __dirname + '/../src/app/api/remote.ts',
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
    extensions: WebPackScripts.getExtensions(),
    alias: WebPackScripts.getAliasList()
  },
  module: {
    rules: WebPackScripts.getRules()
  },
  target: 'node',
  externals: nodeModules,
};