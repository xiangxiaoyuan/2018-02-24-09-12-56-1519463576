function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var collection_c = [];
  for(var i = 0;i<collection_a.length;){
    var count = 0;
    isCollection(collection_a);
    collection_c.push({"key":collection_a[i],"count":count});
    i+=count;
  }
  function isCollection(collection) {
    for (var j = i;j<collection_a.length;j++){
      if(collection_a[i]==collection[j]){
        count+=1;
      }
    }
  }
  for(var x = 0;x<collection_c.length;x++){
    if(collection_c[x].key.length>1){
      var arr = collection_c[x].key.split("-");
      collection_c.splice(x,1);
      collection_c.push({"key":arr[0],"count":arr[1]});
    }
  }
  for(var p=0;p<collection_c.length;p++){
    for(var y=0;y<object_b.value.length;y++){
      if(collection_c[p].key==object_b.value[y]){
        var num = Math.floor(collection_c[p].count/3);
        for(var z=0;z<num;z++){
          collection_c[p].count-=1;
        }
      }
    }
  }
  return collection_c;
}

module.exports = create_updated_collection;
