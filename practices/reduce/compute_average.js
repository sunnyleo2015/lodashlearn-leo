'use strict';
var _ = require('lodash');
function compute_average(collection) {
  //在这里写入代码
    var result = _.mean(collection);
    return result;
}

module.exports = compute_average;

