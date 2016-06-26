var _ = require('lodash');
function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var arrayA = [];
  _.forEach(collection_a,function (n) {
    arrayA.push(n.key)
  })

  var arrayB = object_b.value;
  return _.intersection(arrayA, arrayB);
}

module.exports = collect_same_elements;
