'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var collection = [];
  if(number_a<number_b){
    for(var i=number_a;i<=number_b;i++){
      collection.push(String.fromCharCode(96+i));
    }
  }
  if(number_a>number_b) {
    for (var j = number_a; j >= number_b; j--) {
      collection.push(String.fromCharCode(96+j));
    }
  }
  if(number_a==number_b){
    collection.push(String.fromCharCode(96+number_a));
  }
  return collection;
}

module.exports = get_letter_interval;
