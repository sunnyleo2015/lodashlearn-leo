'use strict';
var _ = require('lodash');
function choose_common_elements(collection_a, collection_b) {
  var result = _.intersection(collection_a, collection_b);
  return result;
}

module.exports = choose_common_elements;
