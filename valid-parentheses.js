(function() {
  "use strict";

  this.isValid = function(data) {
    var m = data.match(/[\[\]{}()]/g);
    var stack = [];
    var pairs = {
        '[':']',
        '{':'}',
        '(':')'
    };
    var isValid = true;
    m.forEach(function(bracket) {
      if (pairs[bracket]) {
        var close = pairs[bracket];
        stack.push(close);
      }
      else {
        if (stack.pop() !== bracket) {
          isValid = false;  
        }
      }
    });
    return isValid;
  };
}).call(this);
