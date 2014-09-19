(function() {
  "use strict";
  // https://github.com/LuckyTrue/factorion/blob/master/factorion.js
  // пасибо

  function factorial(n) {
      if (n === 0 || n === 1) {
          return 1;
      }

      if (n === 2) {
          return 2;
      }

      var res = 1;
      for (var i=n; i>0; i--) {
          res *= i;
      }

      return res;
  }

  function getSummFact(n) {
    var sum = 0;

    n = n.toString();

    for (var i=0, len=n.length; i<len; i++) {
        sum += factorial(+n[i]);
    }

    return sum;
  }

  this.getFactorions = function() {
    var result = [];
    for (var i=1; i<=2540160; i++) {
        if (i === getSummFact(i)) result.push(i);
    }
    return result;
  };
}).call(this);
