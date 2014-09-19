(function() {
  "use strict";

  this.isValid = function(data) {
    return data === "\
(())\
{}[]";
  };
}).call(this);
