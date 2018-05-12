# Sourcerer's Boilerplate

Node.js, Meow.js, Inquirer.js

## Overview

A boilerplate for a Node.js CLI applications

Souts at you if you want to

## Notes

- Uses `meow` as CLI helper

- Uses `inquirer` as interctive CLI user interface

- Loads environment variables from `.env` file

- Full list of log levels:

  ```
  trace
  debug   - use it for development
  info    - default value is set in `.env.example` from `util/chalk-init`
  warn
  error   - use it for production
  fatal
  ```

- Full list of logging functions:

  ```
  error
  warn
  success
  debug
  log
  ```

- A CLI tool name is `util`. Change it in `package.json`

- Linter config extends airbnb's

## Quick Start

1. Make a new one

  ```
  # Clone
  git clone git@github.com:mkora/sourcerer-taskrunner.git
  cd sourcerer-taskrunner

  rm -rf .git && git init && npm i
  
  # Install dependencies
  npm i
  ```

2. Run a CLI tool

  ```
  # Help
  util --help
  node cli.js --help
  # Shout by default
  util shout
  node node cli.js shout
  # Shout with a text option
  util shout --text='Oh, no!'
  node cli.js shout --text='Oh, no!'
  ```

3. Make it a real CLI tool:

  - NOTE: Don't forget to add a shebang `#!/usr/bin/env node` to `cli.js` and update `bin` sction in `package.js`

  - Make it global

    ```
    npm install -g
    ```

  - IMPORTANT: After any changes in `./cli.js` don't forget to run

    ```
    npm link
    ```
