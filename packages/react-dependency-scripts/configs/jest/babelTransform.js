"use strict";

const babelJest = require("babel-jest");

module.exports = babelJest.createTransformer({
  presets: [
    [require.resolve("@babel/preset-env"), { modules: "commonjs" }],
    [require.resolve("@babel/preset-react"), { absoluteRuntime: false }]
  ],
  plugins: [
    require.resolve("@babel/plugin-proposal-class-properties"),
    require.resolve("@babel/plugin-transform-runtime")
  ],
  babelrc: false,
  configFile: false
});
