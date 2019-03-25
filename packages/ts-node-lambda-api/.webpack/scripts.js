var fs = require('fs');
const path = require('path');

const getPaths = () => {
  const resolvePath = path.resolve(__dirname, "../src/app/domains");

  const folders = fs
    .readdirSync(resolvePath)
    .map(domainFolder => {
      const domainControllersPath = path.resolve(__dirname, `../src/app/domains/${domainFolder}/controllers`)
      const domainFolters = fs.readdirSync(domainControllersPath)
        .filter(domainFileController => fs.lstatSync(`${domainControllersPath}/${domainFileController}`).isFile())
        .map(domainFileController => {
          const entryName = domainFileController.replace("\.ts", "");
          return {
            [`${entryName}`]: `${domainControllersPath}/${domainFileController}`
          };
        })

      return domainFolters;
    })
    .reduce((prev, current) => {
      return prev.concat(current);
    }, []);;

  return Object.assign({}, ...folders);
};

const getAliasList = () => {
  return {
    app: __dirname + '/../src/app/',
    src: __dirname + '/../src/',
  };
};

const getExtensions = () => {
  return ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'];
};

const getRules = () => {
  return [{
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }, ];
};

const WebPackScripts = {
  getPaths,
  getAliasList,
  getExtensions,
  getRules,
};

module.exports = WebPackScripts;