'use strict';
var _ = require('lodash');
function choose_no_repeat_number(collection) {
  var result = _.uniq(collection);
  return result;
}

module.exports = choose_no_repeat_number;
