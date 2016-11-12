var app = require('./Coffee');
var yargs = require('yargs');

var flags = yargs.usage('$0: Usage node cli.js')
  .options('h', {
    alias: 'help',
    describe: 'Display Help'
  })
  .options('b1', {
    alias: 'brewSeq',
    describe: 'brew Coffee Sequentially',
    type: 'array'
  })
  .options('b2', {
    alias: 'brewPara',
    describe: 'brew Coffee Parrallel',
    type: 'array'
  })
  .argv;

if (flags.help) {
  yargs.showHelp();
  process.exit(0);
} else {
  app.run(flags);
}
