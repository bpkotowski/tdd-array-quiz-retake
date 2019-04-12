// Write a **tested** (jest unit tested) library function (a single `function` exported from a module/file)
// that takes an array of numbers and returns a new array that:

// * Has removed any numbers less than 5
// * Has modified the original number to be a phrase of the format: "Wow, 10 is big!"

// Test Case:

// Input | Output
// ---|---
// [1, 3, 5, 7, 2] | ['Wow, 7 is big!']

// **NOTE: You are _not_ being asked to implement the array methods like we did on the first lab. You are using normal, built-in array methods and combining them to achieve a specific purpose!**

const FilterArray = require('../lib/index');

describe('filterArray', () => {
  it('removes numbers less than 5', () => {
    const arr = [1, 3, 5, 7, 9];
    FilterArray(

        
    );
    expect(arr).toEqual(result);
  });
});
