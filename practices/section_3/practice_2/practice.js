function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  for(var i=0;i<collection_a.length;i++){
    for(var j=0;j<object_b.value.length;j++){
      if(collection_a[i].key==object_b.value[j]){
        var num = Math.floor(collection_a[i].count/3);
        for(var x=0;x<num;x++){
          collection_a[i].count-=1;
        }
      }
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
