'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  var collection_a = [];
  for(var i=0;i<collection.length;i++){
    if(collection[i]==4){
      collection_a.push(i);
    }
  }
  var max = 0;
  for(var j=0;j<collection_a.length;j++){
    if(max<collection_a[j]){
      max = collection_a[j];
    }
  }
  return max;
}

module.exports = calculate_elements_sum;
