String.prototype.removeSubstring = function (a, n) {
	var arr = [];
	arr = str.split('');
	arr.sort();

	//console.log(arr);
	console.log("oldStr = '" + str + "'");

	var count = 0;

	for (var i = 0; i < arr.length; i++) {
		if( n != null ) {
			if(arr[i] === a)
				arr.splice(i, n)
				i = arr.length;
		} else {
			while(arr[i] === a) {
				arr.splice(i, 1)
			}
		}
	}
	//console.log(arr);
	var tostring = arr.join('');
	console.log("newStr = '" + tostring + "'");
}

var str = 'aaa';

var newStr1 = str.removeSubstring('a', 2); // newStr = 'a'

var str = 'aaabbbba';

var newStr2 = str.removeSubstring('a'); // newStr = 'bbbb'
