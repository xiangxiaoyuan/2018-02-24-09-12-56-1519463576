'use strict';

function find_last_even(collection) {
  //在这里写入代码
  var even = [];
  for(var i=0;i<collection.length;i++){
    if(collection[i]%2==0){
      even.push(collection[i]);
    }
  }
  var last_even = even[even.length-1];
  return last_even;
}

module.exports = find_last_even;
