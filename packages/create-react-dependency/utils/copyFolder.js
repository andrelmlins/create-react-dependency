"use strict";

const fs = require("fs");
const path = require("path");

const copyFolder = (source, target) => {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target);
  }

  const files = fs.readdirSync(source);

  files.forEach(file => {
    const currentPath = path.join(source, file);
    const targePath = path.join(target, file);

    if (fs.lstatSync(currentPath).isDirectory()) {
      copyFolder(currentPath, targePath);
    } else {
      fs.copyFileSync(currentPath, targePath);
    }
  });
};

module.exports = copyFolder;
