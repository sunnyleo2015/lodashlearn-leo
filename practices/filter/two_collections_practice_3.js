'use strict';
var _ =require('lodash');
function choose_divisible_integer(collection_a, collection_b) {
    var result = _.filter(collection_a, function(n){
        return _.some(collection_b, function (m) {
          return n%m == 0;
        })
      }
    );
    return result;
}
module.exports = choose_divisible_integer;
