'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var collection = [];
  if(number_a<number_b){
    for(var i=number_a;i<=number_b;i++){
      var num = Math.floor(i/26);
      if(num==0) {
        collection.push(String.fromCharCode(96 + i));
      }
      else if(i%26!=0){
        collection.push(String.fromCharCode(96+num)+String.fromCharCode(i-26*num+96));
      }
      else if(num==1){
        collection.push(String.fromCharCode(26+96));
      }
      else {
        collection.push(String.fromCharCode(96+num-1)+String.fromCharCode(26+96));
      }
    }
  }
  if(number_a>number_b) {
    for (var j = number_a; j >= number_b; j--) {
      var num = Math.floor(j/26);
      if(num==0){
        collection.push(String.fromCharCode(96 + j));
      }
      else if(j%26!=0){
        collection.push(String.fromCharCode(96+num)+String.fromCharCode(j-26*num+96));
      }
      else if(num==1){
        collection.push(String.fromCharCode(26+96));
      }
      else {
        collection.push(String.fromCharCode(96+num-1)+String.fromCharCode(26+96));
      }
    }
  }
  if(number_a==number_b){
    var num = Math.floor(number_a/26);
    if(num==0) {
      collection.push(String.fromCharCode(96 + number_a));
    }
    else {
      collection.push(String.fromCharCode(96+num)+String.fromCharCode(number_a-26*num+96));
    }
  }
  return collection;
}

module.exports = get_letter_interval_2;

