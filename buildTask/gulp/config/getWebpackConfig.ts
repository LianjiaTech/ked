
// Normal requirement
import path from 'path';
import webpack, { Configuration } from 'webpack';
import WebpackBar from 'webpackbar';
import webpackMerge from 'webpack-merge';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';
import FilterWarningsPlugin from 'webpack-filter-warnings-plugin';
import { getProjectPath, resolve } from '../../utils/gulpHelp';
import postcssConfig from './postcssConfig';
import CleanUpStatsPlugin from '../plugin/CleanUpStatsPlugin';
import getBabelCommonConfig from './getBabelCommonConfig'; // eslint-disable-line import/order
import { replaceLib } from '../plugin/replaceLib'

// Show warning for webpack
// @ts-ignore
process.traceDeprecation = true;

const svgRegex = /\.svg(\?v=\d+\.\d+\.\d+)?$/;
const svgOptions = {
  limit: 10000,
  minetype: 'image/svg+xml',
};

const imageOptions = {
  limit: 10000,
};

function getWebpackConfig(modules?: boolean) {
  const babelConfig: any = getBabelCommonConfig(modules || false);

  // babel import for components
  babelConfig.plugins.push([
    resolve('babel-plugin-import'),
    {
      style: true,
      libraryName: 'ked',
      libraryDirectory: 'components',
    },
  ]);

  if (modules === false) {
    babelConfig.plugins.push(replaceLib);
  }

  const config: Configuration = {
    devtool: 'source-map',

    output: {
      path: getProjectPath('./dist/'),
      filename: '[name].js',
    },

    resolve: {
      modules: ['node_modules', path.join(__dirname, '../node_modules')],
      extensions: [
        '.web.tsx',
        '.web.ts',
        '.web.jsx',
        '.web.js',
        '.ts',
        '.tsx',
        '.js',
        '.jsx',
        '.json',
      ],
      alias: {
        ked: process.cwd(),
      },
    },

    node: [
      'child_process',
      'cluster',
      'dgram',
      'dns',
      'fs',
      'module',
      'net',
      'readline',
      'repl',
      'tls',
    ].reduce((acc, name) => ({ ...acc, [name]: 'empty'}), {}),

    module: {
      noParse: [/moment.js/],
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: resolve('babel-loader'),
          options: babelConfig,
        },
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: resolve('babel-loader'),
              options: babelConfig,
            },
            {
              loader: resolve('ts-loader'),
              options: {
                transpileOnly: true,
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: { ...postcssConfig, sourceMap: true},
            },
          ],
        },
        {
          test: /\.less$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: { ...postcssConfig, sourceMap: true},
            },
            {
              loader: resolve('less-loader'),
              options: {
                javascriptEnabled: true,
                sourceMap: true,
              },
            },
          ],
        },

        // Images
        {
          test: svgRegex,
          loader: 'url-loader',
          options: svgOptions,
        },
        {
          test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i,
          loader: 'url-loader',
          options: imageOptions,
        },
      ],
    },

    plugins: [
      new CaseSensitivePathsPlugin(),
      new WebpackBar({
        name: '🐜👨  ked Tools',
        color: '#2f54eb',
      }),
      new CleanUpStatsPlugin(),
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
      }),
    ],

    performance: {
      hints: false,
    },
  };

  if (process.env.RUN_ENV === 'PRODUCTION') {
    const entry = ['./index'];

    // Common config
    config.externals = {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
      },
    };
    config.output.library = 'ked';
    config.output.libraryTarget = 'umd';
    config.optimization = {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true,
          uglifyOptions: {
            warnings: false,
          },
        }),
      ],
    };

    // Development
    const uncompressedConfig = webpackMerge({}, config, {
      entry: {
        ked: entry,
      },
      mode: 'development',
      plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].css',
        }),
      ],
    });

    // Production
    const prodConfig = webpackMerge({}, config, {
      entry: {
        [`ked.min`]: entry,
      },
      mode: 'production',
      plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.LoaderOptionsPlugin({
          minimize: true,
        }),
        new MiniCssExtractPlugin({
          filename: '[name].css',
        }),
      ],
      optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})],
      },
    });
    return [prodConfig, uncompressedConfig];
  }

  return config;
}

getWebpackConfig.webpack = webpack;
getWebpackConfig.svgRegex = svgRegex;
getWebpackConfig.svgOptions = svgOptions;
getWebpackConfig.imageOptions = imageOptions;

export default getWebpackConfig;
