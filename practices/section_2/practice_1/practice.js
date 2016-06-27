var _ = require('lodash');
function count_same_elements(collection) {
  return _.chain(collection).groupBy(function (item) {
    return item;
  }).map(function (value,key) {
    return {
      key:key,
      count: value.length
    }
  }).value();
}

module.exports = count_same_elements;
