'use strict';

const fs = require('fs');
const copyFolder = require('../utils/copyFolder');

const installTemplate = dir => {
  const folder = `${__dirname}/../template`;
  try {
    fs.copyFileSync(`${folder}/gitignore`, `${dir}/.gitignore`);
    fs.copyFileSync(`${folder}/README.md`, `${dir}/README.md`);
    copyFolder(`${folder}/src`, `${dir}/src`);
  } catch (err) {
    console.log(`\x1b[31m${err}\x1b[0m`);
  }
};

module.exports = installTemplate;
