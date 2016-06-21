'use strict';
var rank_asc = function(collection){
  //return [6,5,4,3,2];
  var mycollection = collection;
  //var result = [];
  var temp = 0;

  for(var i=0; i<mycollection.length; i++){
    for(var  j=0; j<mycollection.length-i; j++){
      if(mycollection[j] < mycollection[j+1]){
        temp = mycollection[j];
        mycollection[j] = mycollection[j+1];
        mycollection[j+1] = temp;
      }
    }
  }

  return mycollection;
};

module.exports = rank_asc;
