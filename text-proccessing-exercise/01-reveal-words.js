// Reveal Words
// Write a function, which receives two parameters.
// The first parameter will be a string with some words separated by ', '.
// The second parameter will be a string that contains templates containing '*'.
// Find the word with the same length as the template and replace it.

function solve(words, text) {

   words = words.split(', ');
   
   for (let word of words) {
    let repeatCount = word.length;
    let starTemplate = '*'.repeat(repeatCount);
    
    text = text.replace(starTemplate, word)
}

console.log(text);
    
}
// solve('great',
//  'softuni is ***** place for learning new programming languages')

solve('great, learning',
    'softuni is ***** place for ******** new programming languages'
)