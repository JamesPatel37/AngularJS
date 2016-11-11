var superagent = require('superagent');
var data = require('./data');

module.exports = function (app) {
	app.get('/api/:type', function (req, res) {

		console.log(req.query)
		superagent
			.get('http://numbersapi.com/' + req.query.number + '/' + req.params.type)
			.query({ json: true })
			.end(function (err, response) {
				if (err) {
					return res.send(err);
				}

				if (req.query.save) {
					data.saveFact(response.body, function (err, saved) {
						response.body.saved = saved;
						res.json(response.body);
					});
				} else {
					res.json(response.body);
				}
			});

	});
}
