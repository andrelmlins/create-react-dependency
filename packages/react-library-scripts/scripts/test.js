"use strict";

process.env.BABEL_ENV = "test";
process.env.NODE_ENV = "test";
process.env.PUBLIC_URL = "";

const jest = require("jest");
const fs = require("fs");
let jestConfig = require("../configs/jestConfig");

const packageJson = JSON.parse(fs.readFileSync("./package.json"));

if (fs.existsSync("./src/setupTest.js")) {
  jestConfig.setupFilesAfterEnv = ["<rootDir>/src/setupTest.js"];
}

if (packageJson.jest) {
  jestConfig = { ...jestConfig, ...packageJson.jest };
}

args.unshift("--ci");
args.unshift("--config", JSON.stringify(jestConfig));

jest.run(process.argv.slice(2));
