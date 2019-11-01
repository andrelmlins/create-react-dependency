"use strict";

const fs = require("fs");

const installTemplate = async dir => {
  const folder = `${__dirname}/../template`;
  try {
    const promisses = [];
    promisses.push(fs.copyFile(`${folder}/gitignore`, `${dir}/.gitignore`));
    promisses.push(fs.copyFile(`${folder}/README.md`, `${dir}/README.md`));
    promisses.push(fs.copyFile(`${folder}src`, `${dir}/src`));

    await Promise.all(promisses);
  } catch (err) {
    console.log(`\x1b[31m${err}\x1b[0m`);
  }
};

module.exports = installTemplate;
