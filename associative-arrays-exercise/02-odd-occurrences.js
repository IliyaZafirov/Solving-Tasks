// Odd Occurrences
// Write a function that extracts the elements of a sentence, if it appears an odd number of times (case-insensitive).
// The input comes as a single string. The words will be separated by a single space.

function solve(str) {

    let words = str.split(' ').map(el => el.toLowerCase());
    let collection = {};

    for (let word of words) {

        if (!(collection.hasOwnProperty(word))) {
            collection[word] = 1;
        } else {
            collection[word]++;
        }
    }

    let entries = Object.entries(collection);
    let result = [];
    for (let [key, value] of entries) {
        if (value % 2 !== 0) {
            result.push(key);
        }
    }

    console.log(result.join(' '));

}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')