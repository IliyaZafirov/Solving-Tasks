// First and Last K Numbers
// Write a function that prints the first k and the last k elements from an array of numbers.
// The input comes as an array of number elements. The first element represents the number k, all other elements are
// from the array that needs to be processed.
// The output is printed on the console on two lines. On the first line, print the first k elements, separated by space.
// On the second line, print the last k elements, separated by space.

function solve(n, k) {

   let result = [1];

   for(let i = 1; i < n; i++){

       result[i] = sumLastK(result, k);

   }

   function sumLastK(array = result, k) {

       k = array.length > k ? k : array.length;

       let sum = 0;

       for(let i = 1; i <= k; i++){

           sum += array[array.length - i];

       }

       return sum;

   }

   console.log(`${result.join(' ')}`);

}
solve(6, 3)