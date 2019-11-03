"use strict";

const fs = require("fs");
const path = require("path");

const createPackageJson = (root, name) => {
  const basePackageJson = {
    name: name,
    version: "0.0.1",
    main: "dist/index.js",
    module: "dist/index.js",
    license: "MIT",
    files: ["dist"],
    scripts: {
      start: "react-dependency-scripts start",
      build: "react-dependency-scripts build",
      test: "react-dependency-scripts test"
    },
    devDependencies: {
      react: "16.11.0",
      "react-dom": "16.11.0",
      "react-dependency-scripts": "0.2.4"
    },
    browserslist: {
      production: [">0.2%", "not dead", "not op_mini all"],
      development: [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version"
      ]
    }
  };

  fs.writeFileSync(
    path.join(root, "package.json"),
    JSON.stringify(basePackageJson, null, 2)
  );
};

module.exports = createPackageJson;
