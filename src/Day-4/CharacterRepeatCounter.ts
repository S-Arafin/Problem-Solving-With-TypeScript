// Problem 10: Count Occurrences of a Character  [Easy]
// Description: Write a function countChar(str, char) that returns how many times a character appears in a string.
// Example:
// Input: 'banana', 'a'  → Output: 3
// Hint: Use split(char).length - 1 or a loop.

function countChar(str: string, char: string):number{
    let count: number = 0;
    for(let currentChar of str){
        if(currentChar === char){
            count++;
        }
    }
    return count;
}

console.log(countChar('banana', 'a'));