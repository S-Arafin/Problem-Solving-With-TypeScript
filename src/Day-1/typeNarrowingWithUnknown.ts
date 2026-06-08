/*
Problem 4: Type Narrowing with unknown
Create a function processInput that accepts a single parameter of type unknown.

If the input is a string, return the string reversed.

If the input is a number, return the square of the number.

If the input is anything else (boolean, object, array, null, etc.), return the string "Unsupported type".

Requirements:

The parameter must strictly be typed as unknown (do not use any).

You must use type guards (typeof) to safely narrow down the types before performing operations on them.
*/

function processInput(input: unknown): any {
    if(typeof input === "string"){
        return input.split('').reverse().join('');
    }
    else if(typeof input === "number"){
        return input*input;
    }
    else{
        return "Unsupported type";
    }
}

console.log(processInput("typescript"));
console.log(processInput(8));
console.log(processInput(true));
console.log(processInput([1, 2, 3]));