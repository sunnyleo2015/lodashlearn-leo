'use strict';
var _ = require('lodash');
function map_to_even(collection){
    var result = _.map(collection,algorithm);
    return result;
}
module.exports = map_to_even;

function algorithm(n){
    return n*2;
}
