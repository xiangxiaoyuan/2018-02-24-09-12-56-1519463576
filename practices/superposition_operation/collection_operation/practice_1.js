'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  var arr = [];
  var count = 0;
  for(var i=0;i<collection.length;i++){
    var num = collection[i]*3+2;
    arr.push(num);
    count+=arr[i];
  }
  return count;
}

module.exports = hybrid_operation;

