(function() {
  "use strict";

  // решал пару лет назад сам в вакансии яндекса
  // но спасибо: http://stackoverflow.com/questions/8817394/javascript-get-deep-value-from-object-by-passing-path-to-it-as-string

  function deepFind(obj, path) {
    var paths = path.split('.')
      , current = obj
      , i;

    for (i = 0; i < paths.length; ++i) {
      if (current[paths[i]] == undefined) {
        return undefined;
      } else {
        current = current[paths[i]];
      }
    }
    return current;
  }

  this.jpath = deepFind;
}).call(this);
