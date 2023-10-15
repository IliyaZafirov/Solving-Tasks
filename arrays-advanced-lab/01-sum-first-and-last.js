<<<<<<< HEAD
function solve(arr) {

    let first = arr[0]
    let last = arr[arr.length -1]

    console.log(first + last);

 
}

solve([20, 30, 40])
=======
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
>>>>>>> 3fa2deda2ed942f43ff57bf6fa81cdc152e745a6
