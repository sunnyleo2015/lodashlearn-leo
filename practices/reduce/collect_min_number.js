'use strict';
var _ = require('lodash');
function collect_min_number(collection) {
  //在这里写入代码
    var result = _.min(collection);
    return result;
}

module.exports = collect_min_number;

