// Description: Write a function isEven(n) that returns true if a number is even, and false if it is odd.
// Example:
// Input: 4  → Output: trueInput: 7  → Output: false
// Hint: Use the modulus (%) operator.

const isEven = (num: number):boolean=>{
    return num%2 === 0;
}

console.log(isEven(5))
