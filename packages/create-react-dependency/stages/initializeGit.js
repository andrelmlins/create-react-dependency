'use strict';

const { spawnSync } = require('child_process');

const initializeGit = name => {
  const originalDirectory = process.cwd();

  try {
    process.chdir(name);

    spawnSync('git', ['init'], { stdio: 'inherit' });
    spawnSync('git', ['add', '*'], { stdio: 'inherit' });
    spawnSync('git', ['commit', '-m', '"First Commit"'], { stdio: 'inherit' });
  } catch (err) {
    console.log(`\x1b[31m${err}\x1b[0m`);
  }

  process.chdir(originalDirectory);
};

module.exports = initializeGit;
