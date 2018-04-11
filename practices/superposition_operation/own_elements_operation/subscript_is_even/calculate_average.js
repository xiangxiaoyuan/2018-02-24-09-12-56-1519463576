'use strict';
var calculate_average = function(collection){
  var arr = [];
  for(var i =0;i<collection.length;i++){
    if((i+1)%2==0){
      arr.push(collection[i]);
    }
  }
  var count = 0;
  for (var j=0;j<arr.length;j++){
    count+=arr[j];
  }
  return count/arr.length;
};
module.exports = calculate_average;
