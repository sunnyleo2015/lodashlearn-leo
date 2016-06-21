'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
    var result = 0;
    var mycollection = collection.split('->');
    var temp = 0;
    var newArray = mycollection.sort(function(a, b) {
        return a - b;

    });


    if(newArray.length%2 == 0){
        result = (parseInt(newArray[parseInt(newArray.length/2)-1]) + parseInt(newArray[parseInt(newArray.length/2)]))/2;
    }else {
        result = newArray[parseInt(newArray.length/2)+1];
    }

    return result;
}

module.exports = compute_chain_median;
