'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var mycollection = collection;
  var outputcollection = new Array();
  for(var i=0; i<mycollection.length; i++){
    if(mycollection[i]%2 == 0){
  	  outputcollection.push(mycollection[i]);
    }
  } 
  return outputcollection;
}

module.exports = collect_all_even;
