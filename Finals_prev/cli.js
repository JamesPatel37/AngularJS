var app = require("./Calculator");
var yargs = require("yargs");

var flag = yargs.usage("$0: Usage node bodmas.js --solve  {equation}")
.options("h",{
	alias : "help",
	describe : "Display help"
})
.options("s",{
	alias : "solve",
	describe : "Solves the equation"
})
.options("f",{
	alias : "file",
	describe : "Solves the equation"
}).argv;

if(flag.help){
  //yargs.showHelp();
	console.log("-h --help ");
	console.log("-s --solve \"Expression\" ")
	process.exit(0);
} else {
  app.run(flag);
}
