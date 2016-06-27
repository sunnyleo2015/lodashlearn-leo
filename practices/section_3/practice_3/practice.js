var _ = require('lodash');
function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var bValue = object_b.value;
  var aArray = _.countBy(collection_a);
  var result = [];
  var newaArray = [];

  //_.forEach(aArray,function (n) {
  //  newaArray.push({'key': n, count: aArray[n]});
  //})

  for(var n in aArray){
    newaArray.push({"key":n,"count":aArray[n]})
  }
  _.map(newaArray,function (n) {
    if(bValue.indexOf(n.key)!= -1){
      n.count = n.count -Math.floor((n.count)/3);
      result.push(n)
    }else {
      result.push(n)
    }
  })

  return result;
}

module.exports = create_updated_collection;
