#!/usr/bin/env node
import { Command } from 'commander/esm.mjs';
import parser from "./parser.js";

const program = new Command();

program
  .version('0.0.1', '-V, --version', 'output the version number')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1>')
  .arguments('<filepath2>')
  .option('-f, --format [type]',  'output format')
  .action((firstConfig, secondConfig) => {
    console.log(parser(firstConfig, secondConfig));
});
program.parse();