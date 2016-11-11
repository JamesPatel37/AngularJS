var fs = require('fs');
//var arg = require('yargs').argv;

var superagent = require('superagent');

module.exports.run = function(flags) {
  var fileApp = new FileApp(flags);
  fileApp.init();
};

function FileApp(flags) {
  this.flags = flags;
}

FileApp.prototype.init = function() {
  if (this.flags.write) {
    this.write();
  }

  if (this.flags.remove) {
    this.remove();
  }

  if (this.flags.math) {
    this.math();
  }

  if (this.flags.trivia) {
    this.trivia();
  }

  if (this.flags.date) {
    this.date();
  }
};

FileApp.write = function (args) {
  var jsonFile = 'facts.json';
  var result = args;

  fs.appendFile(jsonFile, result, function(err) {
    if (err) throw err;
    console.log('File Saved');
  });
};

FileApp.prototype.math = function () {
  var filename = this.flags.math;
  var save = this.flags.save;
  //var arg = require('yargs').argv;

  superagent.get('http://numbersapi.com/' + filename + '/math?json')
  .end(function (err, response) {
  console.log('math: ', JSON.parse(response.text).text);
  FileApp.write(response.text);
  });
};

FileApp.prototype.trivia = function () {
  var filename = this.flags.trivia;

  superagent.get('http://numbersapi.com/' + filename + '/trivia?json')
  .end(function (err, response) {
    console.log('trivia: ', JSON.parse(response.text).text);
    FileApp.write(response.text);
  });
};

FileApp.prototype.date = function () {
  var filename = this.flags.date;

  if (filename === parseInt(filename, 10))
    superagent.get('http://numbersapi.com/' + filename + '/year?json')
    .end(function (err, response) {
      console.log('year: ', JSON.parse(response.text).text);
      FileApp.write(response.text);
    });
  else
    superagent.get('http://numbersapi.com/' + filename + '/date?json')
    .end(function (err, response) {
      console.log('date: ', JSON.parse(response.text).text);
      FileApp.write(response.text);
    });
};
