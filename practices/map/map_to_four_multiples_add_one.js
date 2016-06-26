'use strict';
var _ = require('lodash');
var map_to_four_multiples_add_one = function(collection){
  var result = _.map(collection,algorithm);
  return result;
};

function algorithm(n){
  return n*4+1;
}

module.exports = map_to_four_multiples_add_one;
