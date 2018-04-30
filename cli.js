const dotenv = require('dotenv');
// const logger = require('./utils/logger');
const meow = require('meow');
const chalk = require('chalk');
const getStdin = require('get-stdin');

/**
 * Load environment variables from .env file
 * where API keys and passwords are configured
 */
dotenv.load({
  // TODO: check existance of .env file and then load
  path: '.env.example',
});

const cli = meow(`
  Usage:
    $ foo <input> [options]

  Input:
    shout

  Options:
    --text TEXT         text for trasformation

  Examples:
    $ foo shout --text

  Other options:
    -h, --help          show usage information
    -v, --version       print version info and exit
  `, {
  flags: {
    type: {
      type: 'string',
      alias: 't',
      default: 'Shut up, Meg!',
    },
  },
});

const actions = (action, flags) => {
  const { text } = flags;
  if (action === 'shout') {
    const output = text.toUpperCase();
    console.log(output);
  } else {
    console.log(text);
  }
};

actions(cli.input, cli.flags);
