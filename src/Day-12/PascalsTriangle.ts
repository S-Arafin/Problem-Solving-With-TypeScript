// Problem 50: Pascal's Triangle Row  [Medium]
// Description: Write a function pascalRow(n) that returns the nth row of Pascal's Triangle as an array.
// Example:
// Input: 0  → Output: [1]Input: 3  → Output: [1,3,3,1]Input: 4  → Output: [1,4,6,4,1]
// Hint: Each element is the sum of the two elements above it from the previous row.

function pascalRowMath(n: number): number[] {
    const row: number[] = [1]; 

    for (let k = 1; k <= n; k++) {
        const prev = row[k - 1];
        const nextVal = prev * (n - k + 1) / k;
        row.push(nextVal);
    }

    return row;
}

console.log(pascalRowMath(12));