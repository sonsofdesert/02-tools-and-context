const fp = {};

//.forEach
fp.myForEach = function(arr, cb) {
   for (let i = 0; i < arr.length; i++){
       let el = arr[i];
       cb(el);
   }
};
//.map
fp.myMap = function(arr, cb) {
    
};
//.filter
fp.myFilter = function(arr, cb) {
    
};
//.reduce
fp.myReduce = function(arr, cb, initialState = 0) {
    
};
module.exports = {};
module.exports.fp = fp;