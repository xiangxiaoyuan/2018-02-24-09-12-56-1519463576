function count_same_elements(collection) {
  //在这里写入代码
  var collection_result = [];
  for(var i=0;i<collection.length;){
    var count = 0;
    for(var j=i;j<collection.length;j++){
      if(collection[i]==collection[j]){
        count+=1;
      }
    }
    collection_result.push({"key":collection[i],"count":count});
    i+=count;//i=i+count;
  }
  for(var x=0;x<collection_result.length;x++){
    if(collection_result[x].key.length>1){
      var arr=collection_result[x].key.split("-");
      collection_result.splice(x,1);
      collection_result.push(({"key":arr[0],"count":Number(arr[1])}));
    }
  }
  return collection_result;
}

module.exports = count_same_elements;
