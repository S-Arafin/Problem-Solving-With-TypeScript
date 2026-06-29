// Problem 40: Group Array by Property  [Medium]
// Description: Write a function groupBy(arr, key) that groups an array of objects by a given property key.
// Example:
// groupBy([{type:'fruit',name:'apple'},{type:'veg',name:'carrot'},{type:'fruit',name:'mango'}], 'type')// {fruit: [...], veg: [...]}
// Hint: Use reduce() and build an object where each key maps to an array.

function groupBy<T, K extends keyof T>(arr: T[], key: K): Record<string, T[]> {
  return arr.reduce((acc, obj) => {
    const groupKey = String(obj[key]);
    acc[groupKey] = acc[groupKey] ?? [];
    acc[groupKey].push(obj);
    return acc;
  }, {} as Record<string, T[]>);
}