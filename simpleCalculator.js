// Simple Calculator
// Write a function that receives three parameters – two numbers and an operator (string) – and calculates the result
// depending on the operator. Operator can be 'multiply', 'divide', 'add' or 'subtract'. Try to solve this
// task using arrow functions.
// Bonus
// Solve this task without using any conditional statements (no if or switch statements or ternary operators).
// Input
// The input comes as parameters named numOne, numTwo, operator.
// Hints
// • Use a switch statement for the different operators.



function simpleCalculator(numOne, numTwo, operator) {
    // let multiply = (a,b) => a * b;
    // let divide = (a,b) => a / b;
    // let add = (a,b) => a + b;
    // let subtract = (a,b) => a - b;

     // switch (operator) {
    //     case 'multiply': 
    //     return multiply(numOne, numTwo);
    //         //break;
    //     case 'divide': 
    //     return divide(numOne, numTwo);
    //        // break;
    //     case 'add':
    //         return add(numOne, numTwo);
    //        // break;
    //     case 'subtract':
    //         return subtract(numOne, numTwo);
    //       //  break;

    //     default:
    //         break;
    // }

    let obj = {
        'multiply': (a, b) => a * b,
        'divide': (a, b) => a / b,
        'add': (a, b) => a + b,
        'subtract': (a, b) => a - b
    }
    return obj[operator](numOne, numTwo);
   
}

console.log(simpleCalculator(50, 13, 'subtract'));
