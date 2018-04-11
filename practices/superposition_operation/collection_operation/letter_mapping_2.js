'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var count = 0;
  var str = [];
  for(var i=0;i<collection.length;i++){
    count+=collection[i];
    str[i] = String.fromCharCode(collection[i]+96);
  }
  var sum = Math.ceil(count/collection.length);
  return str[sum-1];
}

module.exports = average_to_letter;

