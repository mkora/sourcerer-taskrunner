const log = require('console-log-level')({ level: 'info' });
const chalk = require('chalk');
const logSymbols = require('log-symbols');

const error = msg => log.error(`${logSymbols.error} ${chalk.bold.red(msg)}`);
const warn = msg => log.warn(`${logSymbols.warning} ${chalk.keyword('orange')(msg)}`);
const success = msg => log.info(`${logSymbols.success} ${chalk.bold.green(msg)}`);
const debug = msg => log.debug(`${logSymbols.info} ${chalk.gray(msg)}`);
const message = msg => console.log(chalk.white(msg));

module.exports = {
  error,
  warn,
  success,
  debug,
  message,
};
