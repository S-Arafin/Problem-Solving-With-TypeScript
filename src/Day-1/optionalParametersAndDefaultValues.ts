/*
Problem 2: Optional Parameters and Default Values
Create a function createGreeting that accepts three parameters:

name (string, required)

greeting (string, optional, defaults to "Hello")

isMorning (boolean, optional)

The function should return a greeting string. If isMorning is true, append " Good morning!" to the end of the string. If isMorning is false or not provided, just return the standard greeting.

Requirements:

Properly use optional parameters (?) and default parameters.

Write the correct return type for the function.
*/

function createGreeting (name: string, greeting:string = "Hello", isMorning?:boolean){
    if(isMorning){
        return(`${greeting} ${name} Good Morning!`)
    }
    else{
        return (`${greeting} ${name}`)
    }
}

console.log(createGreeting('Arafin', 'whasuppppp', true))