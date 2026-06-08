// Problem 5: Check Positive, Negative or Zero  [Easy]
// Description: Write a function checkSign(n) that returns 'positive', 'negative', or 'zero' based on the value of n.
// Example:
// Input: -5  → Output: 'negative'Input: 0   → Output: 'zero'
// Hint: Use if-else if-else statements.

function checkSign(n: number):string{
    if(n<0){
        return "Negative";
    }
    else if(n>0){
        return "Positive";
    }
    else{
        return "Zero"
    }
}

console.log(checkSign(0));