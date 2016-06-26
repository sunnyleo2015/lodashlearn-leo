'use strict';
var _ = require('lodash');
var rank_desc = function(collection){
  //return [2,3,4,5,6];
  var result = _.orderBy(collection, [], ['asc']);
  return result;
};

module.exports = rank_desc;
