// . Print Characters
// Write a function that receives a string and prints all the characters on separate lines.


function solve(str) {

    // for (let letter of str) {
    //     console.log(letter);
    // }
    str.split('').map(letter => console.log(letter));

}
solve('AWord')