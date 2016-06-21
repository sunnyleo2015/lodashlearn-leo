'use strict';

function grouping_count(collection) {
  var mycollection ={};

  collection.forEach(function (col){
    if (!mycollection[col]){
      mycollection[col] = 1;
    }
    else{
      mycollection[col]++;
    }
  });

  return mycollection;
}

module.exports = grouping_count;
