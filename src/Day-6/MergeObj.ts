// Problem 17: Merge Two Objects  [Easy]
// Description: Write a function mergeObjects(obj1, obj2) that merges two objects into one. If keys conflict, the second object's values win.
// Example:
// Input: {a:1}, {b:2}  → Output: {a:1, b:2}
// Hint: Use the spread operator or Object.assign().

function mergeObj(obj1: object, obj2: object):object{
    return {...obj1,...obj2}
}

console.log(mergeObj( {a:1,c:2}, {b:2, d:5} ));