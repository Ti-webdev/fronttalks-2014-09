(function() {
  "use strict";

  this.getFactorions = function() {
    // https://github.com/Meister17/factorion/blob/master/factorion.js
    // https://github.com/LuckyTrue/factorion/blob/master/factorion.js
    // пасибо
    // return findFactorions();

    var result = [];
    for (var i=1; i<=2540160; i++) {
        if (i == getSummFact(i)) result.push(i);
    }
    return result;
  };
}).call(this);
