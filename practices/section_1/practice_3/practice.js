function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var collection_c = [];
  var collection_b = object_b.value;
  for(i=0;i<collection_a.length;i++){
    for(j=0;j<collection_b.length;j++){
      if(collection_a[i]==collection_b[j])
      {collection_c.push(collection_a[i]);}
    }
  }
  return collection_c;
}

module.exports = collect_same_elements;
