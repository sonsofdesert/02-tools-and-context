'use strict';

//.forEach
let myForEach = require('../lib/fp.js').myForEach;

describe('testing the forEach function.', () => {
    let arr = [1, 2, 3, 4, 5];

    it('We are going to double each elemate in the array', () => {  
        
        let expected = [2, 4, 6, 8, 10];
        const double = (n) => {return n * 2};
        myForEach(arr, double);
        expect(arr).toEqual(expected);    
    })
});

//.map
const myMap = require('../lib/fp.js').myMap;

describe('testing the map function.', () => {
    let arr = [1, 2, 3, 4, 5];

    it('turns one list into a new list by passing each element through the callback function and saving each result in the new list.', () => {  
        let expected = [2, 4, 6, 8, 10];
        const double = (n) => {return n * 2};
        let results = myMap(arr, double);
        expect(results).toEqual(expected);    
    })
});

//.filter
const myFilter = require('../lib/fp.js').myFilter;

describe('testing the filter function.', () => {
    let arr = [1, 2, 3, 4, 5];

    it('removes even numbers from array.', () => {
        let expected = [2, 4];
        const reEven = (n) => {return n % 2 === 0};
        let results = myFilter(arr, reEven);
        expect(results).toEqual(expected);
    })
})

//.reduce
const myReduce = require('../lib/fp.js').myReduce;

describe("it will reduce the function", () => {
    let array = [2, 4, 2, 2, 4, 4, 6, 6, 8, 8, 10, 10];

 it('it should return a single number by adding up the result of the  callback function', () => {   
    const double = (n) => {return n * 2}; 
   let expected = 132;
   let result = myReduce(array, double);
   expect(result).toBe(expected);
 });
});