// Censored Words
// Write a function that receives a text as a first parameter and a single word as a second. Find all occurrences of that
// word in the text and replace them with the corresponding count of '*'.

function solve(text, str) {

    let censored = '*'.repeat(str.length);
    let result = text;

    while (result.includes(str)) {
        result = result.replace(str, censored);
    }
    console.log(result);


}
solve('A small sentence with some words',
    'small'
)