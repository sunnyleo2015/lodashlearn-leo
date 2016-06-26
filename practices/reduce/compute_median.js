'use strict';
var _ = require('lodash');
function compute_median(collection) {
  //在这里写入代码
    var result = 0;
    var newArray = _.sortBy(collection);


    if(newArray.length%2 == 0){
        result = (parseInt(newArray[parseInt(newArray.length/2)-1]) + parseInt(newArray[parseInt(newArray.length/2)]))/2;
    }else {
        result = newArray[parseInt(newArray.length/2)];
    }

    return result;
}

module.exports = compute_median;


