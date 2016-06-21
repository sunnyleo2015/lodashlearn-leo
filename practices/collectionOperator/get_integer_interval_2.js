'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var a = number_a;
  var b = number_b;
  var outputcollection = new Array();
  var i;

  if(a<b){
   if(a%2 != 0){
     i = a+1;
   }else{
     i = a;
   }
   for(i ; i < b; i=i+2){
     outputcollection.push(i);
   }
  }else if(a>b){
    if(a%2 != 0){
     i = a-1;
    }else{
     i = a;
    }
    for(i; i>b; i=i-2){
     outputcollection.push(i);
    }
  }else if(a==b){
     outputcollection = [a];
  }
}

module.exports = get_integer_interval_2;
