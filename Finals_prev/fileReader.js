var fs = require('fs');
var Q = require('q');


var files = ['format.txt', ['record1.txt']];

record = {};
allRecords = [];
var writeFile = Q.nfbind(fs.writeFile);
var readFile = Q.nfbind(fs.readFile);


Q.all(files).spread(function (format, records) {
	Q.nfapply(fs.readFile, [format, "utf-8"])
	.then(function (text) {
		temp = text.split(",");
		//reading the file and setting the call attributes
		Q.all(temp.map(function(data){
			record[data]="";
		}))
	})
	.then(Q.fcall(records.map(function(file){
		readFile(file, "utf-8")
		.then(function (text) {
			eachLine = text.split("\r\n");
			//read each line
			Q.all(eachLine.map(function(singleLine){
				temp = singleLine.split(",");
				newRecord = {};
				var i = 0;
				for(var key in record){
					newRecord[key] = temp[i++];
				}
				//converting lines to json object and adding it to array
				//console.log(newRecord);
				allRecords.push(newRecord);
			}));
			return allRecords;
		}).then(function(phoneRecords){
				var finalArray = {"incoming":[],"outgoing":[],"message":[]};
				for (var j = 0; j < phoneRecords.length; j++){
					if(phoneRecords[j].Type == "message")
						finalArray.message.push(phoneRecords[j]);
					else{
						if(phoneRecords[j].CallType == "incoming")
							finalArray.incoming.push(phoneRecords[j]);
						else if(phoneRecords[j].CallType == "outgoing")
							finalArray.outgoing.push(phoneRecords[j]);
					}
				}
				writeFile('organized.json', JSON.stringify(finalArray)).then(function (err) {
					  if (err) 
							 console.log(err);
						  console.log('File Printed');
						})
			})
			
			

	})))

}).done(
//can do cleanup activities here, this will always be executed even if the promise is fulfilled or rejected
);


    
