'use strict';

function get_integer_interval(number_a, number_b) {
  var a = number_a;
  var b = number_b;
  var result = new Array();
	
  if(a<b){
    for(var i=0; i<(b-a); i++){
       var temp = a+i;
       result.push(temp);
    }
	console.log(result);
  }
  else if(a>b){
    for(var i=0; i<(a-b); i++){
       var temp = a-i;
       result.push(temp);
    }
	console.log(result);
  }
  else if(a==b){
    var temp = a;
    result.push(temp);
	console.log(result);
  }
  return result;
}

module.exports = get_integer_interval;

