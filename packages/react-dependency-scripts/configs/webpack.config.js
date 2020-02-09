'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolverPath = require('../utils/resolverPath');

const APP_PATH = resolverPath('src/dev');
const BUILD_PATH = resolverPath('build');

const configWebpack = ({ mode }) => {
  const isEnvProduction = mode === 'production';

  return {
    entry: APP_PATH,
    output: {
      path: BUILD_PATH,
      pathinfo: !isEnvProduction,
      filename: isEnvProduction
        ? 'static/js/[name].[contenthash:8].js'
        : 'bundle.js',
      chunkFilename: isEnvProduction
        ? 'static/js/[name].[contenthash:8].chunk.js'
        : 'static/js/[name].chunk.js',
      globalObject: 'this'
    },
    mode,
    bail: isEnvProduction,
    resolve: {
      modules: [
        'node_modules',
        resolverPath('node_modules'),
        resolverPath('src')
      ],
      extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          loader: require.resolve('babel-loader'),
          exclude: /node_modules/,
          options: {
            babelrc: false,
            configFile: false,
            compact: isEnvProduction,
            sourceMaps: false,
            inputSourceMap: false,
            presets: [require.resolve('babel-preset-react-app')]
          }
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: ['file-loader', { loader: 'image-webpack-loader' }]
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    optimization: { minimize: isEnvProduction },
    node: {
      module: 'empty',
      dgram: 'empty',
      dns: 'mock',
      fs: 'empty',
      http2: 'empty',
      net: 'empty',
      tls: 'empty',
      child_process: 'empty'
    },
    plugins: [
      new HtmlWebpackPlugin(
        Object.assign(
          {},
          { inject: true, template: `${APP_PATH}/index.html` },
          isEnvProduction
            ? {
                minify: {
                  removeComments: true,
                  collapseWhitespace: true,
                  removeRedundantAttributes: true,
                  useShortDoctype: true,
                  removeEmptyAttributes: true,
                  removeStyleLinkTypeAttributes: true,
                  keepClosingSlash: true,
                  minifyJS: true,
                  minifyCSS: true,
                  minifyURLs: true
                }
              }
            : undefined
        )
      )
    ]
  };
};

module.exports = configWebpack;
