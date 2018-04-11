'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  var temp;
  for (var i = 1;i<collection.length;i++){
    for(var j = 0;j<collection.length-1;j++){
      if(collection[j]>collection[j+1]){
        temp = collection[j];
        collection[j] = collection[j+1];
        collection[j+1] = temp;
      }
    }
  }
  temp = collection[2];
  collection[2] = collection[0];
  collection[0] = temp;
  temp = collection[1];
  collection[1] = collection[0];
  collection[0] = temp;
  temp = collection[5];
  collection[5] = collection[3];
  collection[3] = temp;
  temp = collection[4];
  collection[4] = collection[3];
  collection[3] = temp;
  return collection;
}
module.exports = rank_by_two_large_one_small;
