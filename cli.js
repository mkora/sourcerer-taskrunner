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

/**
 * Init CLI object
 *  + add non-flag arguments
 *  + add flags (options) and its descriptions
 */
const cli = meow(`
  Usage:
    $ foo <input> [options]

  Input:
    shout

  Options:
    -t, --text TEXT   text for trasformation

  Examples:
    $ foo shout --text='Oh, no!'

  Other options:
    --help            show usage information
    --version         print version info and exit    
  `, {
  flags: {
    text: {
      type: 'string',
      alias: 't',
      default: 'Shut up, Meg!',
    },
  },
});

const actions = (action, flags, help) => {
  if (action === 'shout') {
    const { text } = flags;
    if (text) {
      const output = text.toUpperCase();
      console.log(output);
    } else {
      console.log(text);
    }
  } else {
    console.log(help);
  }
};

actions(cli.input[0], cli.flags, cli.help);
