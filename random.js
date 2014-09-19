(function() {
  "use strict";

  function objectMap(object, cb) {
    Object.keys(object).forEach(function(key) {
      var value = object[key];
      if ('object' === typeof value) {
        objectMap(value, cb);
      } else {
        cb(value);
      }
    });
  }
  
  function randomIntFromInterval(min,max) {
      return Math.floor(Math.random()*(max-min+1)+min);
  }

  this.random = function(object) {
    var count = 0;
    objectMap(object, function() {
      count++;
    });
    var random = randomIntFromInterval(0, count-1);
    var i = 0;
    var result;
    objectMap(object, function(value) {
      if (random === i++) {
        result = value;
      }
    });
    return result;
  };
}).call(this);
