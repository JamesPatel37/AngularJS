var Q = require('q');
module.exports.run = function(flags){

  function brew(t) {

    var deferred = Q.defer();
    setTimeout(function() {
      console.log('------------');
    console.log('Coffee brewed in = ' + t + ' MilliSeconds');
    deferred.resolve();
    }, t);

    return deferred.promise;
  }


  if(flags.brewSeq){

    function sequence(t) {
      return function() {
        return brew(t);
      };
    }

    var StartTimeSequence = new Date();
    brew(2000)
    .then(sequence(2000))
    .then(sequence(2000))
    .then(sequence(2000))
    .then(function() {
    var EndTimeSequence = new Date();
    console.log('----------------------------------------------');
    console.log('Coffee brew done in sequence');
      console.log('Time taken: ' + '['+(EndTimeSequence - StartTimeSequence)+']' + ' MilliSeconds');
    });

  }

  else if(flags.brewPara) {

    var StartTimePara = new Date();

    Q.all([
      brew(2000),
      brew(2000),
      brew(2000),
      brew(2000)
    ]).then(function(){
      var EndTimePara = new Date();
        console.log('----------------------------------------------');
      console.log('Coffee brew done in Parrallel');
      console.log('Time taken: ' + '['+(EndTimePara - StartTimePara)+']' + ' MilliSeconds');
    });

  }
}
