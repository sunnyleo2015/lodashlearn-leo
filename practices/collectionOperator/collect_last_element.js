'use strict';

function collect_last_element(collection) {
  //在这里写入代码
  var inputcollection = collection;
  var lastnum = inputcollection.length - 1;
  var outcollection = inputcollection[lastnum];
  return outcollection;
}

module.exports = collect_last_element;
