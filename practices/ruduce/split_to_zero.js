'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var collection = [];
  var sum = Math.ceil(number/interval);
  for(var i = 0;i<=sum;i++){
    collection.push(Number(number.toFixed(1)));
    if(number>=0||number+interval) {
      number -= interval;
    }
  }
  return collection;
}

module.exports = spilt_to_zero;
