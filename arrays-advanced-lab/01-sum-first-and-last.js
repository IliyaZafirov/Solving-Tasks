// Sum First and Last
// Write a function that calculates and prints the sum of the first and the last elements in an array.
// The input comes as an array of string elements holding numbers.
// The output is printed on the console.

function solve(arr) {

    let first = arr.shift();
    let last = arr.pop();

    let result = Number(first) + Number(last)

    console.log(result);

}


solve(['20', '30', '40'])