var _ = require('lodash');
function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  return _.intersection(collection_a, object_b.value);
}

module.exports = collect_same_elements;
