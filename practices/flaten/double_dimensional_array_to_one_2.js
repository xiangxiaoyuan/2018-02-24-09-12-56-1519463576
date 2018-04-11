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

  for(var i=0;i<collection_result.length;i++){
    for(var j=i+1;j<collection_result.length;j++){
      if(collection_result[i]==collection_result[j]){
        collection_result.splice(j,1);
        j--;
      }
    }
  }
  return collection_result;
}

module.exports = double_to_one;
