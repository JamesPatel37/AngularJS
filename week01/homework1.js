
console.log("[1]");

function isPalindrome(word) {

	console.log("isPalindrome('" + word + "') ? ");

	if (word.length === 0) {
		console.log("False");
            return false;
	} 
	else {
		var len = word.length;
    	for ( var i = 0; i < Math.floor(len/2); i++ ) {
        if (word[i] !== word[len - 1 - i]) {
        	console.log("False");
            return false;
        }
    }
    	console.log("True");
    	return true;
	}
}

isPalindrome('kayak');
isPalindrome('cook');
isPalindrome('');



console.log("[2]");

replaceLetters("parallel"); // para**el
replaceLetters("muhaaa"); // muh***

function replaceLetters(word) {

    var split = []
    split = word.split("");

    for(var i = 0; i <= word.length - 1; i++) {
        for(var j = i + 1; j <= word.length; j++) {
            if (split[i] === split[j]) {
                while (split[i] === split[j]){
                    split[j] = "*";
                    j++;
                }
                split[i] = "*";
            } 
        }
    }
    var replace = split.toString();
             console.log(replace);

}



console.log("[3]");

repeatingLetters(['z', 'y', 'x', 'x', 'w', 'z', 'y', 'u', 'y', 'y']);

function repeatingLetters(arr) {
    
    var a = [], b = [], prev;

    arr.sort();

    for (var i = 0; i < arr.length; i++ ) {
        if (arr[i] !== prev) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = arr[i];
    }

    for(var i = 0; i < a.length; i++) {
        console.log(a[i] + " : " + b[i]);
    }
 
}



console.log("[4]");

shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function shuffle(array) {
    console.log(array);

  var currentIndex = array.length, temp, randomIndex ;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }

    console.log(array);
}



console.log("[5]");


var calc = {
    "+" : function (operand1, operand2) {
        return operand1 + operand2;
    },
    "-" : function (operand1, operand2) {
        return operand1 - operand2;
    },
    "*" : function (operand1, operand2) {
        return operand1 * operand2;
    },
    "/" : function (operand1, operand2) {
        return operand1 / operand2;
    }
};

function calculate(opr1, opr2, operator) {
    var testDemo = calc[operator](opr1, opr2);

    return (testDemo);
}

console.log("calculate(2, 8, '+') = " + calculate(2, 8, "+"));   
console.log("calculate(2, 8, '-') = " + calculate(2, 8, "-"));     
console.log("calculate(2, 8, '*') = " + calculate(2, 8, "*")); 
console.log("calculate(2, 8, '/') = " + calculate(2, 8, "/")); 




console.log("[6]");

sumArray([1, 2, 'a', 4, '7', 'b', 'c', 7]);

    function sumArray(arr) {

         var sum = 0;
         //var split = []
         //split = arr.split("'");

         for (var i = 0; i < arr.length; i++) {
            if (!isNaN(parseInt(arr[i]))) {
                sum = sum + parseInt(arr[i]);
        console.log(sum);
            }
         }   
         //sum = sum - 104798976;    
         console.log("sumArray([1, 2, 'a', 4, '7', 'b', 'c', 7]) = " + sum);

    }


console.log("[7]");

var groceries = [
      { name: 'Orange Juice', price: 2.00 },
      { name: 'Milk', price: 3.50 },
      { name: 'Cereal', price: 2.00 },
      { name: 'Sugar', price: 1.75 }
      ];

      totalPaid(groceries, 9.5);

    function totalPaid(groceries, tax) {

        var array = [];
        var total = 0;

        for (var key in groceries) {

            var price = groceries[key].price;
            var tax = (price * 9.5) / 100;
            var net = price + tax;
            //console.log(net);

            total = total + net;

            array.push(net);
        }

        console.log("       { total: '" + total + "',");
        console.log("     groceries = [");
        console.log("       { name: 'Orange Juice', paid: '" + array[0] + "' },");
        console.log("       { name: 'Milk', paid: '" + array[1] + "' },");
        console.log("       { name: 'Cereal', paid: '" + array[2] + "' },");
        console.log("       { name: 'Sugar', paid: '" + array[3] + "' }");
        console.log("       ];");  

    }
         