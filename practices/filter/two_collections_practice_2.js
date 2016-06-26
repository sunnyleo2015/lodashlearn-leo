'use strict';
var _ =require('lodash');
function choose_no_common_elements(collection_a, collection_b) {
    var result = _.difference(collection_a, collection_b);
    return result;
}

module.exports = choose_no_common_elements;
