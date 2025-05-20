# my-browser-constants

A lightweight module that provides a subset of Node.js constants for use in the browser.

## Installation
```bash
npm install my-browser-constants
```

## Usage
```js
const constants = require('my-browser-constants');

console.log(constants.fs.O_RDONLY); // 0
console.log(constants.os.platform); // 'browser'
console.log(constants.errno.ENOENT); // 'ENOENT'
```

## Modules Included
- `fs` — File system constants (e.g., `O_RDONLY`, `S_IFREG`)
- `os` — Operating system constants (e.g., `EOL`, `platform`)
- `errno` — Common error codes (e.g., `ENOENT`, `EACCES`)

## License
MI
