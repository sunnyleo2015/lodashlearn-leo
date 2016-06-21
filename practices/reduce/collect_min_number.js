'use strict';

function collect_min_number(collection) {
  //在这里写入代码
    var result = Math.min.apply(null, collection);
    return result;
}

module.exports = collect_min_number;

