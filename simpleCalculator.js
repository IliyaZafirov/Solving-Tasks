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



function calculator(num1, num2, operator) {

    switch (operator) {
        case 'multiply':
    console.log(num1 * num2);
            break;
        case 'divide':
    console.log(num1 / num2);
            break;
        case 'add':
    console.log(num1 + num2);
            break;
        case 'subtract':
    console.log(num1 - num2);
            break;

        default:
            break;
    }


}

calculator(5, 5, 'multiply')