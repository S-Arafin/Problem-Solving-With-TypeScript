// Problem 27: Merge Arrays with Spread  [Easy]
// Description: Write a function mergeArrays(...arrays) that accepts any number of arrays and merges them into one using the spread operator.
// Example:
// Input: [1,2], [3,4], [5]Output: [1,2,3,4,5]
// Hint: Use rest parameters and spread inside reduce or flat.

function merge(...arrays: any[]): any[]{
    return arrays.flat()
}

console.log(merge([1,3,4], [1,"asdf",4], [123,341,523543523]));