// Perfect Number 
// Write a function that receives a number and checks if that number is perfect or NOT.
// A perfect number is a positive integer that is equal to the sum of its proper positive divisors.
// That is the sum of its positive divisors excluding the number itself (also known as its aliquot sum).

function perfectNumber(num) {

     let sum = 0;

     for (let divisor = 0; divisor < num; divisor++) {
        if (num % divisor == 0) {
            sum += divisor;
        }
     }

     let result = sum == num ? "We have a perfect number!" : "It's not so perfect.";

     console.log(result);

}

perfectNumber(6)