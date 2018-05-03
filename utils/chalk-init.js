const logIt = console.log;
const chalk = require('chalk');

const error = msg => logIt(chalk.bold.red(msg));
const warn = msg => logIt(chalk.keyword('orange')(msg));
const success = msg => logIt(chalk.bold.green(msg));
const debug = msg => logIt(chalk.gray(msg));
const log = msg => logIt(chalk.white(msg));

module.exports = {
  error,
  warn,
  success,
  debug,
  log,
};
