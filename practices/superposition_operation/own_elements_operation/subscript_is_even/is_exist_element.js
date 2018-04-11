'use strict';
var is_exist_element = function(collection,element){
  var num = collection.indexOf(element);
  if(num%2==0){
    return true;
  }
  else {
    return false;
  }
};
module.exports = is_exist_element;
