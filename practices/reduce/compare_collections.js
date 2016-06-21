'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
    var result = true;

    if(collection_a.length != collection_b.length){
        result = false;
        return result;
    }else {
        for(var i=0; i<collection_a.length; i++){
            if(collection_a[i] != collection_b[i]){
                result = false;
                return result;
            }
        }
    }

    return result;
}

module.exports = compare_collections;


