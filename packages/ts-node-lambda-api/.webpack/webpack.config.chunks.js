var fs = require('fs');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const scripts = require("./scripts");

// const getPaths = () => {
//   const resolvePath = path.resolve(__dirname, "../src/controllers");

//   const folders = fs
//     .readdirSync(resolvePath)
//     .filter(file => fs.lstatSync(`${resolvePath}/${file}`).isFile())
//     // .filter(folder => fs.lstatSync(`${resolvePath}/${folder}`).isDirectory() && fs.existsSync(`${resolvePath}/${folder}/index.js`))
//     .map(file => {

//       const fileName = file.replace("\.ts","");
//       return {
//         [`${fileName}`]: `${resolvePath}/${file}`
//       };
//     })
//     // .concat(getCustomPaths(resolvePath))
//     ;

//   return Object.assign({}, ...folders);
// };


var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: scripts.getPaths(),
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
  externals: [nodeExternals()],
};