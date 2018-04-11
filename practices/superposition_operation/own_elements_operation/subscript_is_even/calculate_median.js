'use strict';
var calculate_median = function(collection){
  var arr = [];
  for(var i=0;i<collection.length;i++){
    if((i+1)%2==0){
      arr.push(collection[i]);
    }
  }
  var len = arr.length;
  for (var j = 0;j<arr.length;j++){
    if(len%2==0){
      var median = Math.ceil((arr[len/2-1]+arr[len/2])/2);
    }
    else {
      var median = (arr[(len+1)/2-1]);
    }
  }
  return median;
};
module.exports = calculate_median;
