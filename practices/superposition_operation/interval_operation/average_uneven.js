'use strict';

function average_uneven(collection) {

  //在这里写入代码
  var count = 0;
  for (var i=0;i<collection.length;i++){
    if(collection[i]%2!=0){
      count+=collection[i];
    }
  }
  var avg = count/(collection.length/2);
  return avg;
}

module.exports = average_uneven;
