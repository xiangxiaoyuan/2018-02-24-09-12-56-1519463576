function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var collection_c = [];
  for(var i=0;i<collection_a.length;){
    var count = 0;
    for(var j=i;j<collection_a.length;j++){
      if(collection_a[i]==collection_a[j]){
        count+=1;
      }
    }
    collection_c.push({"key":collection_a[i],"count":count});
    i+=count;
  }
  for(var x=0;x<collection_c.length;x++){
    for(var y=0;y<object_b.value.length;y++){
      if(collection_c[x].key==object_b.value[y]){
        var num = Math.floor(collection_c[x].count/3);
        for(var z=0;z<num;z++){
          collection_c[x].count-=1;
        }
      }
    }
  }
  return collection_c;
}

module.exports = create_updated_collection;
