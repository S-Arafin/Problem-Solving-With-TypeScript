// Problem 1: Swap Two Variables  [Easy]
// Description: Write a function that swaps the values of two variables without using a third variable.
// Example:
// Input: a = 5, b = 10Output: a = 10, b = 5
// Hint: Try using destructuring or arithmetic operators.

function swap(a: number, b: number): [number, number]{
    [a,b] = [b,a];

    return [a,b]
}

let a = 5;
let b = 10;
[a, b] = swap(a,b)
console.log(`Output: a = ${a}, b = ${b}`)