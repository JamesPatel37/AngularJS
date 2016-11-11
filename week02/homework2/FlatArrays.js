Array.prototype.flattenArray = function() {
	var flatArray = arrays.reduce(function(a, b) {
  return a.concat(b);
}, []);
console.log(flatArray);
return "";
}

var arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.flattenArray())
