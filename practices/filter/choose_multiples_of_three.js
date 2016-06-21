'use strict';

function choose_multiples_of_three(collection) {
  var mycollection = collection;
  var result = [];
  for(var i=0; i<mycollection.length; i++){
    if(mycollection[i]%3 == 0){
      result.push(mycollection[i]);
    }
  }
  return result;
}

module.exports = choose_multiples_of_three;
