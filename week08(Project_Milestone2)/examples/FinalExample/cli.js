var app = require('./app.good');
var yargs = require('yargs');

var flags = yargs.usage('$0: Usage node cli.js')
  .options('h', {
    alias: 'help',
    describe: 'Display Help'
  })
  .options('n', {
    alias: 'numbers',
    describe: 'pass in numbers',
    type: 'array'
  })
  .argv;

if (flags.help) {
  yargs.showHelp();
  process.exit(0);
} else {
  app.run(flags);
}
