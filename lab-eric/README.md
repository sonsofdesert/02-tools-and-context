** lib file **

#function myForEach()
- Has an arity of 2 (arr, cb)
- Runs a for loop going through the array
- calls the call back

#function .myMap()
- Has an arity of 2 (arr, cb)
- Contains results array
- For loop that loops through array, then push results into results array

#function .myFilter()
- Has an arity of 2 (arr, cb)
- Contains results array
- For loop that loops through array, then push results into results array
- If results were true, then it would push ele. 

#function myReduce()
- Has an arity of 2 (arr, cb)
- Contains results array
- Runs a for loop through the array. Returns results. 


#function min()
+ Has an arity of 1 (arr)
+ Data type is an array of integers
+ Returns the minimum integer in the array
+ Will return undefined if the array is empty
+ Accepts negative numbers

#function isSorted()
+ Has an arity of 1 (arr)
+ Data type is an array of integers
+ Will return a sorted array
+ Will return true if the array is empty
+ Will return falase if the array is not sorted
+ Accepts negative numbers