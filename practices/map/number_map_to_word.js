'use strict';
var _ = require('lodash');
var number_map_to_word = function(collection){
  //return ['a','b','c','d','e'];
  var list = "abcdefghijklmnopqrstuvwxyz";
  var sArray=list.split("");

  /*for(var i=0; i<collection.length; i++){
    result.push(list[collection[i]%26-1]);
  }*/
  var result = _.map(collection, function (n) {
    return list[n%26-1];
  });

  return result;
};

module.exports = number_map_to_word;
