'use strict';
var number_map_to_word_over_26 = function(collection){
  //return ['a','m','aa','ad','y','aa'];
  var result = [];

  function i2s(i) {
    var list = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
    var sArray=list.split(" ");
    if(i<1){
      return "";
    }

    if(parseInt((i/26)+"")==0){
      return sArray[i%26-1];
    }
    else {
      if (i%26==0){
        return (i2s(parseInt((i/26)+"")-1))+sArray[26-1];
      }
      else {
        return sArray[parseInt((i/26)+"")-1]+sArray[i%26-1];
      }
    }
  }

  for(var j=0; j<collection.length; j++){
    result.push(i2s(collection[j]));
  }

  return result;
};

module.exports = number_map_to_word_over_26;
