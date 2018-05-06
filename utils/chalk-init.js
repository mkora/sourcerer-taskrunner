const log = require('console-log-level')({ level: 'info' });
const chalk = require('chalk');

const error = msg => log.error(`⛔️ ${chalk.bold.red(msg)}`);
const warn = msg => log.warn(`⚠️ ${chalk.keyword('orange')(msg)}`);
const success = msg => log.info(`✅ ${chalk.bold.green(msg)}`);
const debug = msg => log.debug(`☑️ ${chalk.gray(msg)}`);
const message = msg => console.log(chalk.white(msg));

module.exports = {
  error,
  warn,
  success,
  debug,
  message,
};
