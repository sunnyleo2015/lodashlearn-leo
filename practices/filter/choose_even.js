'use strict';

function choose_even(collection) {
  var mycollection = collection;
  var result = [];
  for(var i=0; i<mycollection.length; i++){
    if(mycollection[i]%2 == 0){
      result.push(mycollection[i]);
    }
  }
  return result;
}

module.exports = choose_even;
