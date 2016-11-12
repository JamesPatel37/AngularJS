var Q = require("q");

var operator = [];
var items, result, equation;
var n;
var pri=[];
var k = 0;

module.exports.run = function(flag) {

	if(flag.solve){
		equation = flag.solve;
		items = flag.solve.split("");

		Q.fcall(function(){
			var flag = false;
			for(var i = 0; i < items.length; i++) {
				if(!isNaN(items[i])){
					continue;
				}
				else if(equation[i] == "+" || equation[i] == "-" || equation[i] == "*" || equation[i]=="/"){
					operator.push(equation[i]);
					continue;
				}
				else
				{
					flag = true;
					break;
				}
			}
			if(flag)
			throw new Error("Expression entered is not proper");
			else
			if(isNaN(items[0]) || isNaN(items[items.length-1])){
				throw new Error("Operators found at the start or end of the equation");
			}
			else
			return;
		}).then(function(){

			var temp = {
				"+" : function (a, b) {
					return a + b;
				},
				"-" : function (a, b) {
					return a - b;
				},
				"*" : function (a, b) {
					return a * b;
				},
				"/" : function (a, b) {
					return a / b;
				}
			};

				var count = 0;
				console.log();
				console.log("The question is: " + equation);
			//	console.log("Operators: " + operator)
				console.log("count = " + count);
				console.log(items);

			for (var i = 0; i <= operator.length; i++) {

				while ( (items.indexOf(operator[i]) >= -1) ){

					var previous, current, next;
					previous = items.indexOf(operator[i])-1;
					current = items.indexOf(operator[i]);
					next = items.indexOf(operator[i])+1;

					if(!isNaN(items[previous]) || !sisNaN(items[next])) {
						var a = parseInt(items[previous]);
						var b = parseInt(items[next]);

						result =  temp[operator[i++]](a, b);
						items[current] = parseInt(result);
						items.splice(previous, 1);
						items.splice(current, 1);
					}
					count++;
					console.log("count = " + count);
					console.log(items);
				}
				console.log("The soultion is: " + result);

				return ;
			}

		}, function (e) {
			console.error(e);
		})
	}
}
