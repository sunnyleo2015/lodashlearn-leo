'use strict';
var _ = require('lodash');
function compute_chain_median(collection) {
  //在这里写入代码
    var result = 0;
    var mycollection = collection.split('->');
    var intcollection  = mycollection.map(function(event){
      return parseInt(event)
    });
    var newArray = _.sortBy(intcollection);


    if(newArray.length%2 == 0){
        result = (parseInt(newArray[parseInt(newArray.length/2)-1]) + parseInt(newArray[parseInt(newArray.length/2)]))/2;
    }else {
        result = newArray[parseInt(newArray.length/2)+1];
    }

    return result;
}

module.exports = compute_chain_median;
