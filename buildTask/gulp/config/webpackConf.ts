/* eslint no-param-reassign: 0 */
// This config is for building dist files
import getWebpackConfig from './getWebpackConfig';

const { webpack } = getWebpackConfig;

// noParse still leave `require('./locale' + name)` in dist files
// ignore is better: http://stackoverflow.com/q/25384360
function ignoreMomentLocale(webpackConfig: any) {
  delete webpackConfig.module.noParse;
  webpackConfig.plugins.push(
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  );
}

function addLocales(webpackConfig: any) {
  let packageName = 'ked-with-locales';
  if (webpackConfig.entry['ked.min']) {
    packageName += '.min';
  }
  webpackConfig.entry[packageName] = './index-with-locales.js';
  webpackConfig.output.filename = '[name].js';
}

function externalMoment(config: any) {
  config.externals.moment = {
    root: 'moment',
    commonjs2: 'moment',
    commonjs: 'moment',
    amd: 'moment',
  };
}

const webpackConfig = getWebpackConfig(false);
console.log(process.env.RUN_ENV);
if (process.env.RUN_ENV === 'PRODUCTION') {
  (webpackConfig as []).forEach(config => {
    ignoreMomentLocale(config);
    externalMoment(config);
    addLocales(config);
  });
}

export default webpackConfig;

module.exports = webpackConfig;
