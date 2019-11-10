'use strict';

const fs = require('fs');

const readAllFiles = path => {
  let files = [];
  let filesResult = [];

  try {
    files = fs.readdirSync(path);
  } catch (e) {
    console.log(`Unknown directory: ${path}`);
  }

  files.forEach(file => {
    if (fs.lstatSync(`${path}/${file}`).isFile()) {
      filesResult.push({ name: `${path}/${file}`, isFile: true });
    } else {
      filesResult.push({ name: `${path}/${file}`, isFile: false });
      filesResult = filesResult.concat(readAllFiles(`${path}/${file}`));
    }
  });

  return filesResult;
};

module.exports = readAllFiles;
