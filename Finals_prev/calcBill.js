var fs = require('fs');
var Q = require('q');
Q.longStackSupport = true;

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
		var obj = JSON.parse(text);
		//console.log(obj);
		return obj;
	}, function (error) {
	    console.error("Error Found : "+error);
	    console.error(error);
	})
	.then(function(billData){
		if(billData.incoming.length == 0 && billData.outgoing.length == 0 && billData.message.length == 0)
			{
				throw new Error("No Data For This User");
			}
		else
			{
			var result = 0;
				Q.all([billData.incoming, billData.outgoing, billData.message].map(function(arr){
					for(var i = 0; i<arr.length;i++)
						result = result+parseInt(arr[i].Charge);
					return result;
				})).then(function(result){
					var basic = 0
					bill = {};
					bill.incomingBill = result[0];
					console.log("Incoming bill : "+result[0]);
					basic = result[1]-result[0];
					bill.outGoingBill = basic;
					console.log("Outgoing bill : "+basic);
					basic = result[2]-result[1]-result[0]
					bill.messageBill = basic;
					console.log("Message bill : "+ basic);
					console.log("Total Bill : "+result[result.length-1]);
					bill.Total = result[result.length-1];
					return bill;
					}).then(function(bill){
						writeFile('bill.json', JSON.stringify(bill)).then(function (err) {
							  if (err)
									 console.log(err);
								  console.log('File Printed');
								})
					},function (exception) {
					    console.error("Error Found : "+exception);
					})
			}
	}).then(function(){}, function (exception) {
	    console.error("Error Found : "+exception);
	})
