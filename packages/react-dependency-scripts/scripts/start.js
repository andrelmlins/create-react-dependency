'use strict';

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

process.on('unhandledRejection', err => {
  throw err;
});

const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const open = require('open');
const config = require('../configs/webpack.config.js');
const resolverPath = require('../utils/resolverPath');
const choosePort = require('choose-port');

const APP_PATH = resolverPath('src/dev');

const compiler = Webpack(config);
const server = new WebpackDevServer(compiler, {
  contentBase: APP_PATH,
  hot: true
});

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '127.0.0.1';

choosePort(PORT, HOST, newPort =>
  server.listen(newPort, 'localhost', () => open(`http://localhost:${newPort}`))
);
