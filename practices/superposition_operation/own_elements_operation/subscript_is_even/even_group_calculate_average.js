'use strict';
var even_group_calculate_average = function(collection){
  var arr = []; 
  var arr10 = []; 
  var arr100 = [];
   var arr1000 = [];
   var result = []; 
  var count10 = 0; 
  var count100 = 0;
   var count1000 = 0;
   var num10;
   var num100; 
  var num1000; 
  for(var i=0;i<collection.length;i++){ 
    if((i+1)%2==0&&collection[i]%2==0){ 
      arr.push(collection[i]); 
    } 
  } 
  for(var j=0;j<arr.length;j++){ 
    if(arr[j]<10){ 
      arr10.push(arr[j]); 
    } 
    if(arr[j]>=10&&arr[j]<100){ 
      arr100.push(arr[j]); 
    } 
    if(arr[j]>=100&&arr[j]<1000){ 
      arr1000.push(arr[j]); 
    } 
  } 
  for(var x=0;x<arr10.length;x++){ 
    count10 += arr10[x]; 
  } 
  for(var x=0;x<arr100.length;x++){ 
    count100 += arr100[x]; 
  } 
  for(var x=0;x<arr1000.length;x++){ 
    count1000 += arr1000[x]; 
  } 
  num10 = count10/arr10.length;
   num100 = count100/arr100.length;
   num1000 = count1000/arr1000.length; 
  for (var i=0;i<collection.length;i++){ 
    if((i+1)%2==0&&collection[i]%2==0){ 
      for(var j=0;j<arr.length;j++){
        if(arr[j]<10){
          result.push(num10);
        }
        if(arr[j]>=10&&arr[j]<100){
          result.push(num100);
        }
        if(arr[j]>=100&&arr[j]<1000){
          result.push(num1000);
        }
      } 
    } 
    else {
      result.push(0);
    } 
  } 
  for (var i=0;i<result.length;i++){
    for (var j = i+1;j<result.length;j++){
      if(result[i]==result[j]) {
        result.splice(j, 1);
        j--;
      }
    }
  }
  for (var i=0;i<collection.length;i++) {
    if ((i + 1) % 2 == 0 && collection[i] % 2 == 0) {
      for (var j=0;j<result.length;j++){
        if(result[j]==0){
          result.splice(j,1);
        }
      }
    }
  }
  return result;

};
module.exports = even_group_calculate_average;
