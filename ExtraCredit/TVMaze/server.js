var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use( express.static('client') );

require('./api/routes')(app)

app.get('*', function (req, res) {
	res.sendFile('/client/views/index.html', { root: __dirname });
});

http.listen(8080, function(){
  console.log('listening on *:8080');
});

//require('./api/routes')(app)

//app.get('*', function (req, res) {
//	res.sendFile('/client/views/index.html', { root: __dirname });
//});

//app.listen(8080, function () {
//	console.log('Server is running on 8080.')
//});
