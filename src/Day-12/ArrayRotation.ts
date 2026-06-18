
// Problem 48: Rotate an Array  [Medium]
// Description: Write a function rotateArray(arr, k) that rotates an array to the right by k steps.
// Example:
// Input: [1,2,3,4,5], k=2Output: [4,5,1,2,3]
// Hint: Use slice and concat, or reverse the whole array then parts.

function rotate(arr: any[], k: number): any[]{
    let lastPart = arr.slice(-k);
    let firstPart = arr.slice(0, -k);

    return lastPart.concat(firstPart);
}

console.log(rotate([1,2,3,4,5], 2));