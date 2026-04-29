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


enum Direction{
    Up,
    Down,
    Right,
    Left,
}

type point = [number, number]

const movePoint = (point: point, direction:Direction) => {
    const [x,y] = point;

    switch(direction){
        case Direction.Up: return[x, y+1]
        case Direction.Down: return[x, y-1]
        case Direction.Right: return[x+1, y]
        case Direction.Left: return[x-1, y]
        default: return[x,y]
    }
}

const startPoint: [number, number] = [0, 0];
console.log(movePoint(startPoint, Direction.Up));
console.log(movePoint([5, 5], Direction.Left));