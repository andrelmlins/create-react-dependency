"use strict";

const fs = require("fs");

const deletePath = path => {
  if (fs.existsSync(path)) {
    const files = fs.readdirSync(path);

    files.forEach(file => {
      const currentPath = path.join(path, file);
      if (fs.lstatSync(currentPath).isDirectory()) {
        deletePath(currentPath);
      } else {
        fs.unlinkSync(currentPath);
      }
    });

    fs.rmdirSync(path);
  }
};

module.exports = deletePath;
