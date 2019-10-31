"use strict";

process.env.NODE_ENV = "production";
process.env.BABEL_ENV = "production";

const babel = require("@babel/core");
const fs = require("fs");
const readAllFiles = require("../utils/readAllFiles");
const deletePath = require("../utils/deletePath");
const resolverPath = require("../utils/resolverPath");
const babelConfig = require("../configs/babelConfig");

process.on("unhandledRejection", err => {
  throw err;
});

const APP_PATH = resolverPath("src/lib");
const BUILD_PATH = resolverPath("dist");

if (fs.existsSync(BUILD_PATH)) {
  deletePath(BUILD_PATH);
}

fs.mkdirSync(BUILD_PATH);
console.log(`Create directory:\t${BUILD_PATH}`);

const files = readAllFiles(APP_PATH);

files.map(path => {
  const newPath = path.name.replace(APP_PATH, BUILD_PATH);
  if (path.isFile) {
    if (path.name.match("^.+\\.(js|jsx|ts|tsx)$")) {
      const result = babel.transformFileSync(path.name, babelConfig);
      fs.appendFileSync(newPath, result.code);
    } else {
      fs.appendFileSync(newPath, fs.readFileSync(path.name));
    }

    console.log("\x1b[32m", `Create file:\t\t${newPath}`, "\x1b[0m");
  } else {
    fs.mkdirSync(newPath);

    console.log(`Create directory:\t${newPath}`);
  }
});
