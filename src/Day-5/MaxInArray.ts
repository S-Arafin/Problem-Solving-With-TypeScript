// Problem 12: Find Maximum Value in Array  [Easy]
// Description: Write a function findMax(arr) that returns the largest number in an array without using Math.max().
// Example:
// Input: [3, 1, 7, 2, 9]  → Output: 9
// Hint: Loop through and track the largest value found.


function findMax(arr: number[]): number | null {

    if (arr.length === 0 ){
        return null;
    }
    let max : number = arr[0]!;
    for (let item of arr){
        if (item>max){
            max = item;
        }
    }
    return max;
}

console.log(findMax([1,3,4,7,5,3,2,1]));