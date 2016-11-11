var config = require('../config.json');
var superagent = require('superagent');

module.exports = function(app) {

  app.get('/api/character/search', function(req, res) {
    superagent
    .get(config.comicvine.url + '/characters')//('http://www.comicvine.com/api/characters') //(config.comicvine.url = '/characters')
    .query({ filter: 'name:' + req.query.name})
    .query({ format: 'json' })
    .query({ api_key: config.comicvine.key })
    .query({ limit: 4})
    .query({ field_list: 'id,name,image,deck'})
    .end(function (err, result){
      res.json(result.body.results);
    })
  });

  app.get('/api/character/:id', function (req, res) {
    superagent
    .get(config.comicvine.url + '/character/4005-' + req.params.id)
    .query({ format: 'json' })
    .query({ api_key: config.comicvine.key })
    .query({ field_list: 'id,name,image,description' })
    .end(function (err, result) {
      res.json(result.body.results)
    })
  })
};
