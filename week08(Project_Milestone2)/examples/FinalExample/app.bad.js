var async = require('async');

// BAD EXAMPLE - weak code with no value - this could be done without using async module
var facebooks = [{
  company: 'Github',
  likes: 500000,
}, {
  company: 'Google',
  likes: 1200000,
},
{
  company: 'Yahoo',
  likes: 900000,
}];

var totalLikes = 0;
async.each(facebooks, function(facebook, callback) {
  totalLikes += facebook.likes;
  callback();
}, function(err){
  console.log(totalLikes);
});
