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
    i+=count;
  }
  return collection_result;
}

module.exports = count_same_elements;
