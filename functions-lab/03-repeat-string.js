// Repeat String
// Write a function that receives a string and a repeat count n. The function should return a new string (the old one
// repeated n times).
// Hints
// 1. Use a loop or another method to repeat the input string.
// 2. Use the return operator to produce the result.

function repeat(str, count) {

    function repeat(str) {

        return str.repeat(count);
    }
    console.log(repeat(str));
}

repeat('abc', 3)
