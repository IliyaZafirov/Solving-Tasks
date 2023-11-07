// Word Occurrences
// Write a function that counts the times each word occurs in a text. Print the words sorted by count in descending
// order. The input comes as an array of strings.

function solve(input) {

    let obj = {};

    for (let elem of input) {

        if (elem in obj) {
            obj[elem] += 1;
            continue;
        }
        obj[elem] = 1;
    }

    Object.entries(obj).sort((a, b) => b[1] - a[1]).map(element =>  console.log(`${element[0]} -> ${element[1]} times`));

}
solve([
    "Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", "And",
    "finally", "the", "third", "sentence"])