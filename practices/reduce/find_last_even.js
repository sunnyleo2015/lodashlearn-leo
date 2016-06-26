'use strict';
var _ = require('lodash');
function find_last_even(collection) {
  //在这里写入代码
    return _.findLast(collection, function (n) {
      return n%2 == 0;
    });
}

module.exports = find_last_even;
