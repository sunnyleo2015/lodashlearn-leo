'use strict';
var _ = require('lodash');
function choose_multiples_of_three(collection) {
  var result = _.filter(collection, function(n){
    return n %3 == 0;
  });

  return result;
}

module.exports = choose_multiples_of_three;
