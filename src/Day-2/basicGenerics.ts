// Problem 7: Basic Generics
// Create a function wrapInArray that accepts a single value of any type and returns an array containing that exact value.

// Requirements:

// You must use a Generic Type variable (e.g., <T>) to accomplish this.

// Do not use any or unknown. The function needs to be smart enough to know that if you pass it a number, it returns a number[], and if you pass it a boolean, it returns a boolean[].


function wrapInArray<T>(arr: T): T[]{
    return [arr];
}

const numberArray = wrapInArray(99);
const stringArray = wrapInArray("TypeScript");

console.log(numberArray);
console.log(stringArray);