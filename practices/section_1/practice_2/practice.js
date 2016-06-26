var _ = require('lodash');
function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
    return _.intersection(_.flattenDeep(collection_a), _.flattenDeep(collection_b));
}

module.exports = collect_same_elements;
