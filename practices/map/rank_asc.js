'use strict';
var _ = require('lodash');
var rank_asc = function(collection){
  //return [6,5,4,3,2];
  var result = _.orderBy(collection, [], ['desc']);
  return result;
};

module.exports = rank_asc;
