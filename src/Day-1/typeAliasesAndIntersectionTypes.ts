/* 
Problem 3: Type Aliases and Intersection Types
Define two separate Type Aliases:

Employee: Contains empId (number) and department (string).

ContactInfo: Contains email (string) and phone (string).

Create a new type called EmployeeProfile that is an Intersection (&) of Employee and ContactInfo. Finally, write a function getEmployeeDirectory that accepts an array of EmployeeProfile objects and returns an array of strings formatted as: "[empId] - [email]".

Requirements:

You must use the type keyword to define the aliases and the intersection.

Do not mutate the original array. Use array methods like map.
*/

type Employee = {
    empId: number;
    department: string;
}

type ContractInfo = {
    email: string;
    phone: string;
}

type EmployeeProfile = Employee & ContractInfo;

const staff: EmployeeProfile[] = [
    { empId: 101, department: 'HR', email: 'hr@company.com', phone: '555-0100' },
    { empId: 102, department: 'IT', email: 'it@company.com', phone: '555-0101' }
]

function getEmployeeDirectory(employees : EmployeeProfile[]): string[]{
    return employees.map((staff)=> `${staff.empId} - ${staff.email}`)
}

console.log(getEmployeeDirectory(staff));