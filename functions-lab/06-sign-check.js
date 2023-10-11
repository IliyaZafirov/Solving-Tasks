// Sign Check
// Write a function, that checks whether the result of the multiplication numOne * numTwo * numThree is positive
// or negative. Try to do this WITHOUT multiplying the 3 numbers.
// Input
// The input comes as parameters named numOne, numTwo, numThree.
// Output
// • If the result is positive, print on the console -> "Positive"
// • Otherwise, print -> "Negative"



function solve(numOne, numTwo, numThree) {

let signCheck = (x, y, z) => x * y * z > 0 ? 'Positive' : 'Negative';

console.log(signCheck(numOne, numTwo ,numThree));


}


solve( 5, 12, -15)