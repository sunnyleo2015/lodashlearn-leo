var _ = require('lodash');
function count_same_elements(collection) {
  //在这里写入代码
  /*var result = [];
  for(var i=0; i<collection.length; i++){
    switch (true){
      case collection[i].indexOf('-')!=-1:
            var name = collection[i].split('-')[0];
            var count = collection[i].split('-')[1];
            result = countNumber(name,count,result);
            break;
      case collection[i].indexOf('[')!=-1:
            var array = collection[i].split('[');
            var count = array[1].substring(0, collectionString[1].length-1);
            var name  =array[0];
            result = countNumber(name,count,result);
            break;
      case collection[i].indexOf(':')!=-1:
            var name = collection[i].split(':')[0];
            var count = collection[i].split(':')[1];
            result = countNumber(name,count,result);
            break;
      default:
            result.push(collection[i]);
    }
  }
  return info(result);
}

function countNumber(name,count,result){
  for(var i=0; i<count; i++){
    result.push(name);
  }
  return result;
}

function info(result){
  var resultCount = _.countBy(result);
  var array = [];
  _.forEach(array,function(e){
    array.push({'name':e,'summary': resultCount[e]})
  })
  return array;*/
  return _.chain(collection).groupBy(function (item) {
    return item;
  }).map(function (value,key) {
    var count  = value.length;
    var keys = key;
    if(key.indexOf("-") != -1){
      keys = key.substring(0,key.indexOf("-"));
      count = parseInt(key.substring(key.indexOf("-") + 1));
    }else if(key.indexOf(":")!=-1){
      keys = key.substring(0,key.indexOf(":"));
      count = parseInt(key.substring(key.indexOf(":") + 1));
    }else if(key.indexOf('[')!=-1){
      var array = key.split('[');
      keys = key.substring(0,key.indexOf("["));
      count = array[1].substring(0, key.length-1);
    }
    return {
      key:keys,
      count: count
    }
  }).value();
}
module.exports = count_same_elements;
