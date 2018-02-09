'use strict';

const fp = require('../lib/fp.js').fp

describe('testing the forEach function.', () => {
    it('We are going to double each elemate in the array', () => {
        const arr = [1, 2, 3, 4, 5];
        let expected = [2, 4, 6, 8, 10];
        const double = (n) => {return n * 2};
        let result = fp.myForEach(arr, double);
         expect(result).toEqual(expected);
    })
});
