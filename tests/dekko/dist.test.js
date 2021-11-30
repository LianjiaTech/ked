const $ = require('dekko')
const chalk = require('chalk')

$('dist')
  .isDirectory()
  .hasFile('ked-with-locales.js')
  .hasFile('ked-with-locales.min.js')
  .hasFile('ked.css')
  .hasFile('ked.min.css')
  .hasFile('ked.js')
  .hasFile('ked.min.js')
  .hasFile('index.json');

// eslint-disable-next-line
console.log(chalk.green('✨ `dist` directory is valid.'))
