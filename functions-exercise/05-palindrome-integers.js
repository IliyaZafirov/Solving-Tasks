// Palindrome Integers
// A palindrome is a number, which reads the same backward as forward, such as 323 or 1001. Write a function, which receives an array of positive integers and checks if each integer is a palindrome or not.
// Output
// If the current integer is a palindrome, print: "true"
// Otherwise, print: "false"
// Hints
// Read more about palindromes: https://en.wikipedia.org/wiki/Palindrome


function palindromeInts(arr) {

    for (let num of arr) {
        let numStr = String(num);
        let reversedNumStr = numStr.split('').reverse().join('');
        console.log(num == reversedNumStr);
    }

}

palindromeInts([123,323,421,121])