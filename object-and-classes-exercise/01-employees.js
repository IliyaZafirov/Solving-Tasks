// // Employees
// // You're tasked to create a list of employees and their personal numbers.
// // You will receive an array of strings. Each string is an employee name and to assign them a personal number you
// // have to find the length of the name (whitespace included).
// // Try to use an object.
// // At the end print all the list employees in the following format:

function employees(arr) {

    for (let i = 0; i < arr.length; i++) {
       
        const obj = {
            name: arr[i],
            personalNumber: arr[i].length
        }

        console.log(`Name: ${obj.name} -- Personal Number: ${obj.personalNumber}`);
    }
}

// function employees(inputArr) {

//     class personInfo {
//         constructor(hisName, personalNum) {
//             this.name = hisName;
//             this.id = personalNum;
//         }

//         printInfo() {
//             console.log(`Name: ${this.name} -- Personal Number: ${this.id}`);
//         }
//     }

//     let employeeList = [];

//     for (let elem of inputArr) {
//         let currentName = elem;
//         let currentID = elem.length;
//         let currentEmployee = new personInfo(currentName, currentID);

//         employeeList.push(currentEmployee);
//     }

//     employeeList.forEach(e => e.printInfo());

// }

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])