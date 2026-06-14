// Problem 26: Destructure and Rename  [Easy]
// Description: Given a user object, use destructuring to extract firstName, lastName, and age, renaming firstName to name.
// Example:
// const user = {firstName:'Sara', lastName:'Khan', age:25};// Extract: name='Sara', lastName='Khan', age=25
// Hint: Use: const { firstName: name, lastName, age } = user;

type UserProfile = {
    firstName: string;
    lastName: string;
    age: number;
}

function Destructure(user: UserProfile){
    const{firstName: name, lastName, age} = user;

    console.log(name);
}

const user = {firstName:'Sara', lastName:'Khan', age:25};

Destructure(user)