"use strict";

const fs = require("fs");

const installTemplate = dir => {
  const folder = `${__dirname}/../template`;
  try {
    fs.copyFileSync(`${folder}/gitignore`, `${dir}/.gitignore`);
    fs.copyFileSync(`${folder}/README.md`, `${dir}/README.md`);
    fs.copyFileSync(`${folder}src`, `${dir}/src`);
  } catch (err) {
    console.log(`\x1b[31m${err}\x1b[0m`);
  }
};

module.exports = installTemplate;
