'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var collection_result = [];
  for(var i=0;i<collection.length;i++){
    if(typeof(collection[i])=='object'){
      for(var j=0;j<collection[i].length;j++){
        collection_result.push(collection[i][j]);
      }
    }
    else{
      collection_result.push(collection[i]);
    }
  }
  return collection_result;
}

module.exports = double_to_one;
