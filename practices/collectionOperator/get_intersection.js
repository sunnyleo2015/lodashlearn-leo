'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var a = collection_a;
  var b = collection_b;
  var result = new Array(); 

  for(var j=0; j<b.length; j++){
     for(var i=0; i<a.length; i++){
       if(b[j] == a[i]){
	 result.push(b[j]);
       }
     }
  }
  //alert(result);
  return result;
}

module.exports = get_intersection;
