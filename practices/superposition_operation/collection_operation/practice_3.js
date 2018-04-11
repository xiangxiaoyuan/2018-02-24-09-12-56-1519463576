'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var arr = [];
  var count = 0;
  for(var i= 0;i<collection.length;i++){
    if(collection[i]%2!=0){
      arr.push(collection[i]*3+5);
    }
  }
  for(var j=0;j<arr.length;j++){
    count+=arr[j];
  }
  return count;
}

module.exports = hybrid_operation_to_uneven;

