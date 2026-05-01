/* 
Problem 6: The readonly Modifier
Define an interface Configuration with the following properties:

apiKey (string, but it must be strictly readonly)

environment (string)

maxRetries (number)

Create a function updateRetryCount that accepts a Configuration object and a new number of retries. The function should return a brand new Configuration object with the updated maxRetries value.

Requirements:

Use the readonly modifier correctly in the interface.

Do not mutate the original object passed into the function (use the spread operator ... to create the new object).
*/

interface Configuration {
    readonly apiKey : string;
    environment: string;
    maxRetries: number;
}

function updateRetryCount(config: Configuration, newRetries:number): Configuration{
    return{
        ...config,
        maxRetries: newRetries
    };

}
const originalConfig: Configuration = {
  apiKey: "super-secret-key-123",
  environment: "production",
  maxRetries: 3
};

const updatedConfig = updateRetryCount(originalConfig, 5);

console.log(originalConfig.maxRetries);
console.log(originalConfig);
console.log(updatedConfig.maxRetries);
console.log(updatedConfig);