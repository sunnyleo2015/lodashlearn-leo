var _ = require('lodash');
function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var bValue = object_b.value;
  var result = [];

  _.map(collection_a,function(n){
    if(bValue.indexOf(n.key)!=-1){
      n.count = n.count-Math.floor((n.count)/3);
      result.push(n);
    }
    else {
      result.push(n);
    }
  })

  return result;
}

module.exports = create_updated_collection;
