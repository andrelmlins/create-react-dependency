#!/usr/bin/env node

"use strict";

const program = require("commander");

console.log("\x1b[36mCreate React Dependency", "\x1b[0m");
console.log(`🚀 Version: ${require("./package.json").version}\n`);

let projectName;

program
  .version(require("./package.json").version, "-v --version", "Version number")
  .helpOption("-h --help", "For more information");

program
  .name(`${require("./package.json").name} new`)
  .command("new <name-project>")
  .description("Create a new project")
  .action(name => (projectName = name));

program.parse(process.argv);

if (typeof projectName === "undefined") {
  console.error("\x1b[31mSpecify the name project.", "\x1b[0m");
  console.log(`  For example: ${program.name()} my-dependencie`);
  console.log(`  Run ${program.name()} --help for more information\n`);

  process.exit(1);
} else {
  console.log("sucess");
}
