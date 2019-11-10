'use strict';

const { execSync } = require('child_process');

const yarnInstalled = () => {
  try {
    execSync('yarnpkg --version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    return false;
  }
};

const installDependencies = dir => {
  const originalDirectory = process.cwd();
  try {
    process.chdir(dir);

    if (yarnInstalled) {
      execSync('yarnpkg install', { stdio: 'inherit' });
    } else {
      execSync('npm install', { stdio: 'inherit' });
    }
  } catch (err) {
    console.log(`\x1b[31m${err}\x1b[0m`);
  }

  process.chdir(originalDirectory);
};

module.exports = installDependencies;
