'use strict';

function find_first_even(collection) {
  //在这里写入代码
  var even = [];
  for(var i = 0;i<collection.length;i++){
    if(collection[i]%2==0){
      even.push(collection[i]);
    }
  }
  var first_even = even[0];
  return first_even;
}

module.exports = find_first_even;

