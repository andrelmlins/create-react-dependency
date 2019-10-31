"use strict";

process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";

const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const open = require("open");
const config = require("../configs/webpack.config.js");
const verifyPort = require("../utils/verifyPort");
const resolverPath = require("../utils/resolverPath");

const APP_PATH = resolverPath("src/dev");

const compiler = Webpack(config);
const server = new WebpackDevServer(compiler, {
  contentBase: APP_PATH,
  hot: true
});

const PORT = process.env.PORT || 3000;
const baseUrl = "http://localhost";

verifyPort(PORT, baseUrl, newPort => {
  server.listen(newPort, "localhost", () => open(`${baseUrl}:${newPort}`));
});
