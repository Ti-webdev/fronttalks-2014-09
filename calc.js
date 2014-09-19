(function() {
  "use strict";

  var module = this;
  ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'].forEach(function(name, i) {
      module[name] = function(operation) {
        if (0 === arguments.length) {
          return i+1;
        }
        else {
          return operation(i+1);
        }
      };
  });

  this.times = function(a) {
    return function(b) {
      return a*b;
    };
  };

  this.plus = function(a) {
    return function(b) {
      return a+b;
    };
  };

  this.minus = function(a) {
    return function(b) {
      return b-a;
    };
  };

  this.dividedBy = function(a) {
    return function(b) {
      return b/a;
    };
  };
}).call(this);
