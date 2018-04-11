'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  var collection = [];
  if(number_a<number_b){
    for(var i=number_a;i<=number_b;i++){
      collection.push(i);
    }
  }
  if(number_a>number_b) {
    for (var j = number_a; j >= number_b; j--) {
      collection.push(j);
    }
  }
  if(number_a==number_b){
    collection.push(number_a);
  }
  return collection;
}

module.exports = get_integer_interval;

