'use strict';

function compute_average(collection) {
  //在这里写入代码
    var result = 0;
    var sub = 0;
    for(var i=0; i<collection.length; i++){
        sub = sub + collection[i];
    }

    result = sub/(collection.length);
    return result;
}

module.exports = compute_average;

