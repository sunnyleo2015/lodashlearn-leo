var _ = require('lodash');
function count_same_elements(collection) {
  return _.chain(collection).groupBy(function (item) {
    return item;
  }).map(function (value,key) {
    var count  = value.length;
    var keys = key;
    if(key.indexOf("-") != -1){
      keys = key.substring(0,key.indexOf("-"));
      count = parseInt(key.substring(key.indexOf("-") + 1));
    }
    return {
      key:keys,
      count: count
    }
  }).value();
}

module.exports = count_same_elements;
