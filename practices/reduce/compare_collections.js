'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  var flag =true;
  var string_a = "";
  var string_b ="";
  for(var i=0;i<collection_a.length;i++){
    string_a+=collection_a[i];
  }
  for(var j=0;j<collection_b.length;j++){
    string_b+=collection_b[j];
  }
  if(string_a!=string_b){
    flag = false;
  }
  return flag;
}

module.exports = compare_collections;


