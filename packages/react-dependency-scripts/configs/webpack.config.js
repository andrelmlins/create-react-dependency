"use strict";

const HtmlWebpackPlugin = require("html-webpack-plugin");
const resolverPath = require("../utils/resolverPath");

const APP_PATH = resolverPath("src/dev");

const config = {
  entry: APP_PATH,
  mode: "development",
  resolve: {
    modules: ["node_modules", "src/lib"],
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [require.resolve("babel-preset-react-app")]
        }
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader"
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: `${APP_PATH}/index.html`
    })
  ],

  optimization: { minimize: false }
};

module.exports = config;
