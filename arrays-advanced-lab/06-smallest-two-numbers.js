// Smallest Two Numbers
// Write a function that prints the two smallest elements from an array of numbers.
// The input comes as an array of number elements.
// The output is printed on the console on a single line, separated by space.

function solve(arr) {

    let filtered = arr.sort((a, b) => {
        return a - b;
    });
    
    let result = filtered.slice(0, 2);
    console.log(result.join(' '));

}

solve([30, 15, 50, 5])