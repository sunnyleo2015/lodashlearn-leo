var _ = require('lodash');
function choose_even(collection) {
  var result = _.filter(collection, function(n){
    return n %2 == 0;
  });

  return result;
}

module.exports = choose_even;
