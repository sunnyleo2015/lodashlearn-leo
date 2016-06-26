'use strict';
var _ = require('lodash');
function find_first_even(collection) {
  //在这里写入代码
    return _.find(collection, function (n) {
      return n%2==0;
    })
}

module.exports = find_first_even;

