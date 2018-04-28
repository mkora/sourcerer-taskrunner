# Sourcerer's Boilerplate

Node.js, Meow

## Overview

A boilerplate for a Node.js CLI applications

## Notes

- Uses `winston` as a logger for everything else

- Loads environment variables from `.env` file

- Uses `error-handler`

- Uses `meow` as CLI helper

- Linter config extends airbnb's

## Quick Start

1. Make a new one:

  ```
  # Clone
  git clone git@github.com:mkora/sourcerer-taskrunner.git
  cd sourcerer-taskrunner

  rm -rf .git && git init && npm init
  
  # Install dependencies
  npm i
  ```

2. Run a task

- Run a script (if it's not a cli tool yet):

    ```
    LOG_LEVEL=debug node gen save
    LOG_LEVEL=debug node gen output ./dump.json
    ```

- Make it a real CLI tool:

  - Add a shebang `#!/usr/bin/env node`

  - Update `package.json`

    ```
      "bin" : {
        "dough-maker" : "./gen.js"
      }
    ```

  - Make it global

    ```
    npm install -g
    ```

  - IMPORTANT: After any changes in ./gen.js don't forget to run

    ```
    npm link
    ```
