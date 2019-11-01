"use strict";

const fs = require("fs");
const path = require("path");

const deletePath = pathDelete => {
  if (fs.existsSync(pathDelete)) {
    const files = fs.readdirSync(pathDelete);

    files.forEach(file => {
      const currentPath = path.join(pathDelete, file);

      if (fs.lstatSync(currentPath).isDirectory()) {
        deletePath(currentPath);
      } else {
        fs.unlinkSync(currentPath);
      }
    });

    fs.rmdirSync(pathDelete);
  }
};

module.exports = deletePath;
