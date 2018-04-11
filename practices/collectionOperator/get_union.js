'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var collection_c = [];
  for(var i=0;i<collection_a.length;i++){
    for(var  j=0;j<collection_b.length;j++){
      if(collection_a[i]==collection_a[i]){
        collection_c.push(collection_a[i]);
      }
      if(collection_b[j]==collection_b[j]){
        collection_c.push(collection_b[j]);
      }
    }
  }
  for (var x=0;x<collection_c.length;x++){
    for(var y=x+1;y<collection_c.length;y++){
      if(collection_c[x]==collection_c[y]){
        collection_c.splice(y,1);
        y--;
      }
    }
  }
  return collection_c;
}

module.exports = get_union;

