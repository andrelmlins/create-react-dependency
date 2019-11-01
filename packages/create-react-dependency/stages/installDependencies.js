"use strict";

const { execSync } = require("child_process");

const installDependencies = dir => {
  const originalDirectory = process.cwd();
  try {
    process.chdir(dir);

    execSync("yarnpkg install", { stdio: "inherit" });
  } catch (err) {
    console.log(`\x1b[31m${err}\x1b[0m`);
  }

  process.chdir(originalDirectory);
};

module.exports = installDependencies;
