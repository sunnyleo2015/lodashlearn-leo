'use strict';
var _ = require('lodash');
function grouping_count(collection) {
  var result = _.countBy(collection);
  return result;
}

module.exports = grouping_count;
