 
// Problem 49: Roman to Integer  [Medium]
// Description: Write a function romanToInt(s) that converts a Roman numeral string to an integer.
// Example:
// Input: 'III'   → Output: 3Input: 'IX'    → Output: 9Input: 'LVIII' → Output: 58
// Hint: Map each symbol to its value; if a smaller value comes before a larger one, subtract it.

function romanToInt(str: string): number{
    const roman : object = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }

    let total = 0;

    for(let i: number = 0 ; i<str.length ; i++){
        const currentValue = roman[str[i]];
        const nextValue = roman[str[i+1]];

        if (nextValue && currentValue < nextValue) {
            total -= currentValue;
        } else {
            total += currentValue;
        }
    }
    return total;
}

console.log(romanToInt("IX"));