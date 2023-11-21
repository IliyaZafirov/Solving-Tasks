// Problem 1 - Activation Keys
// The problem for exam preparation for the Programming Fundamentals Course @SoftUni.

// You are about to make some good money, but first, you need to think of a way to verify who paid for your product and who didn't. You have decided to let people use the software for a free trial period and then require an activation key to continue using the product. Before you can cash out, the last step is to design a program that creates unique activation keys for each user. So, waste no more time and start typing!
// The first line of the input will be your raw activation key. It will consist of letters and numbers only. 
// After that, until the "Generate" command is given, you will be receiving strings with instructions for different operations that need to be performed upon the raw activation key.
// There are several types of instructions, split by ">>>":
// "Contains>>>{substring}":
// If the raw activation key contains the given substring, prints: "{raw activation key} contains {substring}".
// Otherwise, prints: "Substring not found!"
// "Flip>>>Upper/Lower>>>{startIndex}>>>{endIndex}":
// Changes the substring between the given indices (the end index is exclusive) to upper or lower case and then prints the activation key.
// All given indexes will be valid.
// "Slice>>>{startIndex}>>>{endIndex}":
// Deletes the characters between the start and end indices (the end index is exclusive) and prints the activation key.
// Both indices will be valid.
// Input
// The first line of the input will be a string consisting of letters and numbers only. 
// After the first line, until the "Generate" command is given, you will be receiving strings.
// Output
// After the "Generate" command is received, print:
// "Your activation key is: {activation key}"


function solve(input) {

    let key = input.shift();

    for (let el of input) {

        if (el == 'Generate') break;

        if (el.includes('Contains')) {
            let [, substring] = el.split('>>>');

            if (key.includes(substring)) {
                console.log(`${key} contains ${substring}`);

            } else {
                console.log('Substring not found!');

            }

        } else if (el.includes('Flip')) {
            let [, condition, startIdx, endIdx] = el.split('>>>');

            if (condition == 'Upper') {
                key = key.slice(0, startIdx) + key.slice(startIdx, endIdx).toUpperCase() + key.slice(endIdx, key.length);

            } else if (condition == 'Lower') {
                key = key.slice(0, startIdx) + key.slice(startIdx, endIdx).toLowerCase() + key.slice(endIdx, key.length);

            }

            console.log(key);

        } else if (el.includes('Slice')) {
            let [, startIdx, endIdx] = el.split('>>>');

            key = key.slice(0, startIdx) + key.slice(endIdx, key.length);
            console.log(key);
        }

    }

    console.log(`Your activation key is: ${key}`);
}
solve(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])

// solve(["134softsf5ftuni2020rockz42",
// "Slice>>>3>>>7",
// "Contains>>>-rock",
// "Contains>>>-uni-",
// "Contains>>>-rocks",
// "Flip>>>Upper>>>2>>>8",
// "Flip>>>Lower>>>5>>>11",
// "Generate"])