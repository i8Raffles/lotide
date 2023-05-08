# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @muhtasim.yasser/lotide`

**Require it:**

`const _ = require('@muhtasim.yasser/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: takes in 2 arrays and asserts if 2 arrays are equal
* `assertEqual(...)`: takes in 2 values and asserts if 2 values are equal
* `assertObjectsEqual(...)`: takes in 2 objects and asserts if 2 objects are equal
* `countLetters(...)`: takes in a string and returns the number of times each letter occurs 
* `countOnly(...)`: takes in a string and returns the count of specified letters
* `eqArrays(...)`: takes in 2 arrays and checks if 2 arrays are equal
* `eqObjects(...)`: takes in 2 objects and checks if 2 objects are equal
* `findKey(...)`: takes in an object and a callback, returns the first key that matches the callback specified in the input
* `findKeybyValue(...)`: takes in an object and a value, returns the first key that contains the value specified in the input
* `flatten(...)`: takes in an array with or without nested arrays flattens the nested array 
* `head(...)`: takes in an array and returns the first element
* `index`: contains a list of all functions within this lotide package
* `letterPositions(...)`: takes in a string and returns the position(index) of each letter in an object
* `map(...)`: takes in an array and a callback, then applies the callback to that array and returns a new array
* `middle(...)`: takes in an array and returns the middle element(s)
* `tail(...)`: takes in an array and returns the last element
* `takeUntil(...)`: takes in an array and a callback returns an array of elements up until the callback condition
* `without(...)`: takes in an array and an argument, returns an array without the specified argument

