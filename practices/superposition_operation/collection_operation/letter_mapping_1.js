'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  var str = [];
  var strResult = [];
  for(var i = 0;i<collection.length;i++){
    str[i] = String.fromCharCode(collection[i]+96);
    if(collection[i]%2==0){
      strResult.push(str[i]);
    }
  }
  return strResult;
}

module.exports = even_to_letter;
