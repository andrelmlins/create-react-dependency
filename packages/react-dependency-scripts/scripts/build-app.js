'use strict';

process.env.NODE_ENV = 'production';
process.env.BABEL_ENV = 'production';

const Webpack = require('webpack');
const fs = require('fs-extra');
const resolverPath = require('../utils/resolverPath');
const configWebpack = require('../configs/webpack.config.js');

const BUILD_PATH = resolverPath('build');

const config = configWebpack({
  mode: 'production'
});

fs.emptyDirSync(BUILD_PATH);

const compiler = Webpack(config);

compiler.run((err, stats) => {
  if (err) {
    return console.log(err);
  }

  return console.log(stats);
});
