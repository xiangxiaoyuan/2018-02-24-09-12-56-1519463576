'use strict';
var single_element = function(collection){
  var arr = [];
  var result = [];
  for(var i = 0;i<collection.length;i++){
    if((i+1)%2==0){
      arr.push(collection[i]);
    }
  }
  for(var x=0;x<arr.length;x++){
    for(var y=x+1;y<arr.length;y++){
      if(arr[x]!=arr[y]){
        result.push(arr[y]);
      }
    }
  }
  for(var i=0;i<result.length;i++){
    for(var j=i+1;j<result.length;j++){
      if(result[i]==result[j]){
        result.splice(j,1);
        j--
      }
    }
  }
  return result;
};
module.exports = single_element;
