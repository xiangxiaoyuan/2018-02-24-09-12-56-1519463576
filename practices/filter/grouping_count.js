'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var object = {};
  var count = 1;
  for(var i = 0;i<collection.length;i++){
    for(var j = i+1;j<collection.length;j++){
      if(collection[i]==collection[j]){
        count++;
        collection.splice(j,1);
        j--;
      }
    }
    var name = collection[i]+"";
    object[name] = count;
    count = 1;
  }
  return object;
}

module.exports = grouping_count;
