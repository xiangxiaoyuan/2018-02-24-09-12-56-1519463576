'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  var count = 0;
  for(var i=0;i<collection.length;i++){
    count+=collection[i];
  }
  return count;
}

module.exports = calculate_elements_sum;

