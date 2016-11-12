var Q = require("q");
var fs = require("fs");
var chart = require('ascii-chart');

var file = "organized.json";
var readFile = Q.denodeify(fs.readFile);
var writeFile = Q.denodeify(fs.writeFile);

/*Q.fcall(fs.readFileSync(file, { encoding: 'utf8' }))
	.then(function(text){
		console.log(text);
		},function (exception) { 
	    console.error(exception);
	})*/

readFile(file, "utf-8")
	.then(function(text){
		var callRecords = JSON.parse(text);
		//console.log(obj);
		return callRecords;
	}, function (error) { 
	    console.error("Error Found : "+error);
	})
	.then(function(data){
		//console.log(data);
		console.log(Q.thenResolve(incoming));
		for(var key in Q.keys)
			console.log(key);
		
		//var incomingCount = Q.get(incoming);
		//var outgoingCount = Q.get(outgoing.length);
		//var msgCount = Q.get(message.length);
		//console.log("Incoming Count : "+incomingCount);
		//console.log("Outgoing Count : "+outgoingCount);
		//console.log("Message Count : "+msgCount);
		
		//var stats = [{"Incoming":incomingCount},{"Outgoing":outgoingCount},{"Message":msgCount}];
		
		/*writeFile('statistics.json', JSON.stringify(stats)).then(function (err) {
			  if (err) 
					 console.log(err);
				  console.log('File Printed');
				})*/
	
	});

