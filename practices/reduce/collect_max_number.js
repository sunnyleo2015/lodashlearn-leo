'use strict';
var _ = require('lodash');
function collect_max_number(collection) {
  //在这里写入代码
    var result = _.max(collection);
    return result;
}

module.exports = collect_max_number;
