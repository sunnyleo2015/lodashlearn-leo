'use strict';

function choose_no_repeat_number(collection) {
  var notRepeatObject = {};
  var notRepeatArray = [];

  collection.forEach(function (col){
    if (!notRepeatObject[col]){
      notRepeatObject[col] = 1;
    }
    else{
      notRepeatObject[col]++;
    }
  });

  for (var key in notRepeatObject){
    notRepeatArray.push(parseInt(key));
  }
  return notRepeatArray;
}

module.exports = choose_no_repeat_number;
