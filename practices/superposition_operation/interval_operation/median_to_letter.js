'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  var len = collection.length;
  for (var i = 0;i<collection.length;i++){
    if(len%2==0){
      var median = Math.ceil((collection[len/2-1]+collection[len/2])/2);
    }
    else {
      var median = (collection[(len+1)/2-1]);
    }
  }
  var str = String.fromCharCode(Math.floor(median/26)+96)+String.fromCharCode(median%26+96);
  return str;
}

module.exports = median_to_letter;
