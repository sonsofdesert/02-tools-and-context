
//.forEach
const myForEach = function(arr, cb) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = cb(arr[i]);
    }
};
//.map
const myMap = function(arr, cb) {
  let results = [];
  for (let i = 0; i < arr[i]; i++) {
      let ele = arr[i];
      let result = cb(ele);
      results.push(result);
  }  
  return results;
};
//.filter 
const myFilter = function(arr, cb) {
    let results = [];
  for (let i = 0; i < arr.length; i++){
      let ele = arr[i];
      let result = cb(ele);
      if (result === true) {
          results.push(ele);
      }
  }  
  return results;
};
//.reduce
const myReduce = (array, cb) => {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
      result += cb(array[i]);
    }
    return result;
   }

module.exports.myForEach = myForEach;
module.exports.myMap = myMap;
module.exports.myFilter = myFilter;
module.exports.myReduce = myReduce;