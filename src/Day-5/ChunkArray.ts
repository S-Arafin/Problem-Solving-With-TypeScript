// Problem 15: Chunk an Array  [Medium]
// Description: Write a function chunkArray(arr, size) that splits an array into chunks of a given size.
// Example:
// Input: [1,2,3,4,5], 2  → Output: [[1,2],[3,4],[5]]
// Hint: Use a while loop with slice().

function chunkArr(arr: number[], size: number): number[][] {
  if (size <= 0) {
    return [];
  }
  const result: number[][] = [];
  let index = 0;

  while (index < arr.length) {
    const chunk = arr.slice(index, index + size);
    result.push(chunk);

    index += size;
  }
  return result;
}

console.log(chunkArr([1, 2, 3, 3, 4, 4], 2));
