#!/usr/bin/env node

"use strict";

const { spawnSync } = require("child_process");

const args = process.argv.slice(2);
const scripts = ["start", "build", "test"];

if (args.length === 0) {
  console.log("Empty script.");
  process.exit(1);
}

const script = args[0];

process.on("unhandledRejection", err => {
  throw err;
});

console.log("\x1b[36m", `\nReact Library Scripts\n`, "\x1b[0m");
console.log(
  `🚀 Version: ${require("./package.json").version} / ⚙️  Script: ${script} \n`
);

if (scripts.includes(script)) {
  const result = spawnSync(
    "node",
    [`${__dirname}/scripts/${script}.js`, ...process.argv.slice(3)],
    { stdio: "inherit" }
  );
  process.exit(result.status);
} else {
  console.log(`Unknown script ${script}.`);
  console.log("See: http://github.com/andrelmlins/create-react-library");
  process.exit(1);
}
