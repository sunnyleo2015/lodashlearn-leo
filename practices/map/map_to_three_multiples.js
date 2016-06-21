'use strict';
var map_to_three_multiples = function(collections){
  //return [3,9,15,12,27];
  var result = [];
  for(var i=0; i<collections.length; i++){
    result.push(collections[i]*3);
  }
  return result;
};

module.exports = map_to_three_multiples;
