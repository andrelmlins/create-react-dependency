#!/usr/bin/env node

'use strict';

process.on('unhandledRejection', err => {
  throw err;
});

const { spawnSync } = require('child_process');

const args = process.argv.slice(2);
const scripts = ['start', 'build', 'test', 'build-app'];

if (args.length === 0) {
  console.log('\x1b[31mEmpty script.');
  process.exit(1);
}

const script = args[0];

console.log(`\x1b[36m\nReact Dependency Scripts (${script})`, '\x1b[0m');
console.log(`🚀 Version: ${require('./package.json').version}\n`);

if (scripts.includes(script)) {
  const result = spawnSync(
    'node',
    [`${__dirname}/scripts/${script}.js`, ...process.argv.slice(3)],
    { stdio: 'inherit' }
  );
  process.exit(result.status);
} else {
  console.log(`\x1b[31mUnknown script ${script}.\x1b[0m`);
  console.log('See: http://github.com/andrelmlins/create-react-dependency');
  process.exit(1);
}
