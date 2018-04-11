'use strict';
var even_asc_odd_desc = function(collection){
  var temp;
  for(var i=1;i<collection.length;i++){
    for (var j = 0; j < collection.length-1; j++) {
      if(collection[j+1]%2==0&&collection[j]%2!=0){
        temp = collection[j];
        collection[j] = collection[j+1];
        collection[j+1] = temp;
      }
    }
  }
  for(var i = 1;i<=collection.length;i++){
    for(var j = 0;j<collection.length-1;j++){
      if(collection[j]>collection[j+1]&&collection[j]%2==0&&collection[j+1]%2==0){
        temp = collection[j];
        collection[j] = collection[j+1];
        collection[j+1] = temp;
      }
    }
  }
  for(var i = 1;i<=collection.length;i++){
    for(var j = 0;j<collection.length-1;j++){
      if(collection[j]<collection[j+1]&&collection[j]%2!=0&&collection[j+1]%2!=0){
        temp = collection[j];
        collection[j] = collection[j+1];
        collection[j+1] = temp;
      }
    }
  }
  return collection;
};
module.exports = even_asc_odd_desc;
