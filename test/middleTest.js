const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

middle([1]); // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [[1, 2, 3, 4, 5, 6]]); //Assertion failed: [3, 4] !== 1,2,3,4,5,6