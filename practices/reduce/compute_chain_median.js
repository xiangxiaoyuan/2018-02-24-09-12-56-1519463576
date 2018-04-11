'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  var collection_a = collection.split("->");
  var chain_median=0;
  function sortNumber(a,b)
  {
    return a - b
  }
  var collection_b = collection_a.sort(sortNumber);
  if(collection_b.length%2==0){
    var chain_median1=Number(collection_b[collection_b.length/2-1]);
    var chain_median2=Number(collection_b[collection_b.length/2]);
    chain_median = (chain_median1+chain_median2)/2;
  }
  else{
    chain_median=Number(collection_b[collection_b.length/2-1]);
  }
  return chain_median;
}

module.exports = compute_chain_median;
