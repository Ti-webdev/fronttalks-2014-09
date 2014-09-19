(function() {
  "use strict";

  // http://geniuscarrier.com/valid-parentheses-javascript/
  // не работает!
  function isValidParentheses(str) {
    var i = 0, l = str.length, arr = [];
    if (!l) {
        return true;
    }

    if ((l % 2) !== 0) {
        return false;
    }

    while (i < l) {
        var s = str[i];
        if (s == "{") {
            arr.push(s);
        } else if (s == "}") {
            if (arr.length) {
                arr.pop();
            } else {
                return false;
            }
        }
        i++;
    }
    return true;
  }

  this.isValid = function(data) {
    return isValidParentheses(data);
  };
}).call(this);
