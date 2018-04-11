'use strict';

function choose_multiples_of_three(collection) {

  //在这里写入代码
  var collection_result = [];
  for(var i=0;i<collection.length;i++){
    if(collection[i]%3==0){
      collection_result.push(collection[i]);
    }
  }
  return collection_result;
}

module.exports = choose_multiples_of_three;
