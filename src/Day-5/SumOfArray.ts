// Problem 11: Find the Sum of an Array  [Easy]
// Description: Write a function sumArray(arr) that returns the sum of all numbers in an array.
// Example:
// Input: [1, 2, 3, 4, 5]  → Output: 15
// Hint: Use reduce() or a for loop.

function sumOfArray(arr: Array<number>):number{
    let count:number = 0
    for(let items of arr){
        count += items;
    }
    return count;
}

console.log(sumOfArray([1,2,3,4,5]));