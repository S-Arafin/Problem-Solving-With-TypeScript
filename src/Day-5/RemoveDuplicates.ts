// Problem 13: Remove Duplicates from Array  [Easy]
// Description: Write a function removeDuplicates(arr) that returns a new array with duplicate values removed.
// Example:
// Input: [1, 2, 2, 3, 3, 4]  → Output: [1, 2, 3, 4]
// Hint: Use Set or filter() with indexOf().


function removeDuplicate (arr: number[]): number[]{
    return [...new Set(arr)];    
}

console.log(removeDuplicate([1,1,1,2,2,2,2,2,4,4,4,4,4,5,5,5,5,5,6,6,6,6]));