'use strict';

function choose_no_common_elements(collection_a, collection_b) {
    var result = [];
    
    for(var i=0; i<collection_a.length; i++){
        var temp = false;
        for(var j=0; j<collection_b.length; j++){
            if(collection_a[i] == collection_b[j]){
                temp = true;
                break;
            }
        }
        if(!temp){
            result.push(collection_a[i]);
        }
    }

    return result;
    
}

module.exports = choose_no_common_elements;
