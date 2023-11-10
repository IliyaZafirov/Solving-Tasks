// Substring
// Write a function that receives a string and two numbers. The numbers will be a starting index and count of
// elements to substring. Print the result.

function solve(str, startIndex, count) {

    let result = str.slice(startIndex, startIndex + count)

    console.log(result);


}
solve('ASentence', 1, 8)