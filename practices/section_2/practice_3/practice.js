function count_same_elements(collection) {
  //在这里写入代码
  let arr = [],
    result = [];
  collection.forEach((item)=>{
    if(item.length === 1){
    if(!arr[item]){
      arr[item] = {};
      arr[item].name = item;
      arr[item].summary = 1;
    }else {
      arr[item].summary++
    }
  }else {
    let obj = {};
    obj.str = item.replace(/[^a-z]/ig,"");
    obj.num = item.replace(/[^0-9]/ig,"");
    obj.amount = parseInt(obj.num);
    if(!arr[obj.str]){
      arr[obj.str] = {};
      arr[obj.str].name = obj.str;
      arr[obj.str].summary = obj.amount;
    }else {
      arr[obj.str].summary += obj.amount;
    }
  }
});
  for(let name in arr){
    result.push(arr[name])
  }
  return result;
}

module.exports = count_same_elements;
