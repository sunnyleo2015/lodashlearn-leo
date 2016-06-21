function count_same_elements(collection) {
    var obj = {};
    var result = [];

    for(var i=0; i<collection.length; i++){
        if(collection[i].indexOf('-') == -1){
          if(!obj[collection[i]]){
            obj[collection[i]] = 1;
          }else{
            obj[collection[i]]++;
          }
        }else{
          var objArray = collection[i].split('-');
          obj[objArray[0]] = parseInt(objArray[1]);
        }
    }

    for(var i in obj){
        result.push({key:i, count:obj[i]});
    }

   return result;
}

module.exports = count_same_elements;
