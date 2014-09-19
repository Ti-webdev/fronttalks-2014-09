(function() {
  "use strict";

  // http://codereview.stackexchange.com/questions/14532/checking-for-balanced-brackets-in-javascript
  // пасибо!
  var haveSameLength = function(str, a, b){
    return (str.match(a) || [] ).length === (str.match(b) || [] ).length;
  };
  var isBalanced = function(str){
      var arr = [
          [ /\(/gm, /\)/gm ], [ /\{/gm, /\}/gm ], [ /\[/gm, /\]/gm ]
      ], i = arr.length, isClean = true;

      while( i-- && isClean ){
          isClean = haveSameLength( str, arr[i][0], arr[i][1] );
      }
      return isClean;
  };

  this.isValid = function(data) {
    return isBalanced(data);
  };
}).call(this);
