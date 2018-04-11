'use strict';

function compute_median(collection) {
  //在这里写入代码
  var chain_median = 0;
  function sortNumber(a,b)
  {
    return a - b;
  }
  var collection_a = collection.sort(sortNumber);
  var len = collection_a.length;
  if(len%2==0){
    return ((collection_a[len/2-1]+collection_a[len/2])/2);
  }
  else{
    return (collection_a[(len+1)/2-1]);
  }
}

module.exports = compute_median;


