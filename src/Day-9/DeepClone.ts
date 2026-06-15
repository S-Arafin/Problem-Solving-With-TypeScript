// Problem 33: Deep Clone an Object  [Medium]
// Description: Write a function deepClone(obj) that returns a deep copy of a plain object without using JSON.parse/JSON.stringify.
// Example:
// const a = {x: {y: 1}};const b = deepClone(a);b.x.y = 99;// a.x.y is still 1
// Hint: Use recursion and check for object/array types.

function deepClone(val: any): any {
    if (val === null || typeof val !== "object") {
        return val;
    }

    if (Array.isArray(val)) {
        const arr = [];
        for (const item of val) {
            arr.push(deepClone(item));
        }
        return arr;
    }

    const copy: any = {};
    for (const key in val) {
        if (Object.prototype.hasOwnProperty.call(val, key)) {
            copy[key] = deepClone(val[key]);
        }
    }

    return copy;
}

const a = { x: { y: 1 } };
const b = deepClone(a);

b.x.y = 99;

console.log(a.x.y);
console.log(b.x.y);