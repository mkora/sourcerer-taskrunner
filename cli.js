const dotenv = require('dotenv');
const logger = require('./utils/logger');
const meow = require('meow');
const chalk = require('chalk');
const getStdin = require('get-stdin');

/**
 * Load environment variables from .env file
 * where API keys and passwords are configured
 */
dotenv.load({
  path: '.env.example',
});
