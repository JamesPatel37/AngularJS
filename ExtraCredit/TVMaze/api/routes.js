var superagent = require('superagent');

module.exports = function(app) {

  app.get('/api/show', function(req, res) { // http://api.tvmaze.com/singlesearch/shows?q=girls
    console.log(req.query.q)
    superagent
    .get('http://api.tvmaze.com/search/shows' +'?q=' + req.query.q)
    .query({ format: 'json' })
    .end(function (err, result){
      res.json(result.body);
    })
  });

  app.get('/api/show/:id', function(req, res){
    superagent
    .get('http://api.tvmaze.com/shows/' + req.params.id + '?embed=cast')
    .query({ format: 'json' })
    .end(function(err, result){
      res.json(result.body)
    })
  })
};
