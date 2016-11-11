
var app = require('./app');
var yargs = require('yargs');

//var arg = require('yargs').argv;

var flags = yargs.usage('$0: Usage node cli.js')
  .options('h', {
    alias: 'help',
    describe: 'Display help'
  })
  .options('w', {
    alias: 'write',
    describe: 'writes a file with specified name and text',
    type: 'array'
  })
  .options('m', {
    alias: 'math',
    describe: 'get the math function form numbersapi.com'
  })
  .options('t', {
    alias: 'trivia',
    describe: 'get the trivia fact form numbersapi.com'
  })
  .options('d', {
    alias: 'date',
    describe: 'get the date fact form numbersapi.com'
  })
  .argv;

if (flags.help) {
  yargs.showHelp();
} else {
  app.run(flags);
}
