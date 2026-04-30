/* 
Problem 5: Union and Literal Types
Create a function called handleResponse that accepts a parameter named status. The status parameter must be strictly typed using Literal Types so that it can only accept one of three specific strings: "success", "error", or "loading".

The function should return a specific message based on the status:

If the input is "success" → return "Operation completed successfully."

If the input is "error" → return "An error occurred."

If the input is "loading" → return "Please wait..."

Requirements:

Use a Union of Literal Types for the parameter. Do not just use string.

Define the correct return type.
*/
type Status = "success" | "error" | "loading";

const handleResponse = (status: Status)=>{
    if (status === "success"){
        return "Operation completed successfully."
    }
    else if(status === "error"){
        return "An error occurred."
    }
    else if(status === "loading"){
        return "Please wait..."
    }
}
console.log(handleResponse("success"));
console.log(handleResponse("loading"));
