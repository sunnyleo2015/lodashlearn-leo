'use strict';

function collect_max_number(collection) {
  //在这里写入代码
    var result = Math.max.apply(null, collection);

    return result;
}

module.exports = collect_max_number;
