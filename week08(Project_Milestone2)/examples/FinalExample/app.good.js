var async = require('async');
var superagent = require('superagent');

// GOOD EXAMPLE
module.exports.run = function(flags) {
	if (flags.numbers)
		getFacts(flags.numbers)
}

function getFacts(numbers) {
	async.map(numbers, _mapFacts, function(err, results) {
		console.log(results);
	});
};

function _mapFacts(number, callback) {
	async.parallel({
		math: function(next) {
			_fetchNumbers(number, 'math', function(err, result) {
				next(err, result);
			});
		},
		trivia: function(next) {
			_fetchNumbers(number, 'trivia', function(err, result) {
				next(err, result);
			});
		}
	}, function done(err, result) {
		callback(err, result);
	});
}

function _fetchNumbers(number, type, callback) {
  superagent
    .get('http://numbersapi.com/' + number + '/' + type)
    .query({ json: true })
    .end(function(err, result) {
      callback(err, result.body);
  });
}
