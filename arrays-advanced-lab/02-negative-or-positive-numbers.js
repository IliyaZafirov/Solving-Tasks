<<<<<<< HEAD
function solve(arr) {

    let result = [];

 for (let num of arr) {
    if (num < 0) {
        result.unshift(num)

    } else {
        result.push(num)
    }

 }    
console.log(result.join('\n'));
=======
// Negative or Positive Numbers
// Write a function that processes the elements in an array one by one and produces a new array. Prepend each
// negative element at the front of the array (as the first element) and append each positive (or 0) element at the end
// of the array.
// The input comes as an array of string elements holding numbers.
// The output is printed on the console, each element on a new line.



function solve(arr) {

    let newArr = [];

    for (let el of arr) {
        if (el < 0) {
            newArr.unshift(el);
        } else {
            newArr.push(el);
        }
    }
    console.log(newArr.join('\n'));
>>>>>>> 3fa2deda2ed942f43ff57bf6fa81cdc152e745a6
}

solve(['7', '-2', '8', '9'])