'use strict';

const path = require('path');
const fs = require('fs');

const resolverPath = relativePath =>
  path.resolve(fs.realpathSync(process.cwd()), relativePath);

module.exports = resolverPath;
