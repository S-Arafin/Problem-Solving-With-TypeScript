// Problem 14: Flatten a Nested Array  [Medium]
// Description: Write a function flattenArray(arr) that flattens one level of a nested array.
// Example:
// Input: [1, [2, 3], [4, 5]]  → Output: [1, 2, 3, 4, 5]
// Hint: Use flat() or reduce() with concat().

type Nested = (number | number[])[]

function flatten(arr: Nested):number[]{
    return arr.flat()
}
console.log(flatten([[1,2],[3,4],[5]]));