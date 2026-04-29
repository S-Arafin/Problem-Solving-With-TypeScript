function processInput(input: unknown): any {
    if(typeof input === "string"){
        return input.split('').reverse().join('');
    }
    else if(typeof input === "number"){
        return input*input;
    }
    else{
        return "Unsupported type";
    }
}

console.log(processInput("typescript"));
console.log(processInput(8));
console.log(processInput(true));
console.log(processInput([1, 2, 3]));