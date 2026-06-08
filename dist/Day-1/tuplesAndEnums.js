"use strict";
/*
Problem 1: Tuples and Enums
Create an Enum called Direction with four values: Up, Down, Left, and Right.
Then, create a function called movePoint that accepts a Tuple representing a 2D coordinate [x, y] (both numbers) and a Direction. The function should return a new Tuple representing the updated coordinates based on the direction:

Up increases y by 1.

Down decreases y by 1.

Right increases x by 1.

Left decreases x by 1.

Requirements:

You must define the Direction Enum correctly.

You must explicitly type the function parameters (using a Tuple for the coordinate) and the return type.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Right"] = 2] = "Right";
    Direction[Direction["Left"] = 3] = "Left";
})(Direction || (Direction = {}));
const movePoint = (point, direction) => {
    const [x, y] = point;
    switch (direction) {
        case Direction.Up: return [x, y + 1];
        case Direction.Down: return [x, y - 1];
        case Direction.Right: return [x + 1, y];
        case Direction.Left: return [x - 1, y];
        default: return [x, y];
    }
};
const startPoint = [0, 0];
console.log(movePoint(startPoint, Direction.Up));
console.log(movePoint([5, 5], Direction.Left));
//# sourceMappingURL=tuplesAndEnums.js.map