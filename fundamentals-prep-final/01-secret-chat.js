// Programming Fundamentals Final Exam Preparation 1
// Problem 1. Secret Chat
// Link: https://judge.softuni.org/Contests/Practice/Index/2307#0
// You have plenty of free time, so you decide to write a program that conceals and reveals your received messages. Go ahead and type it in!
// On the first line of the input, you will receive the concealed message. After that, until the "Reveal" command is given, you will receive strings with instructions for different operations that need to be performed upon the concealed message to interpret it and reveal its actual content. There are several types of instructions, split by ":|:"
// "InsertSpace:|:{index}":
// Inserts a single space at the given index. The given index will always be valid.
// "Reverse:|:{substring}":
// If the message contains the given substring, cut it out, reverse it and add it at the end of the message. 
// If not, print only "error". 
// This operation should replace only the first occurrence of the given substring if there are two or more occurrences.
// "ChangeAll:|:{substring}:|:{replacement}":
// Changes all occurrences of the given substring with the replacement text.
// Input / Constraints
// On the first line, you will receive a string with a message.
// On the following lines, you will be receiving commands, split by ":|:".
// Output
// After each correct set of instructions, print the resulting string. 
// After the "Reveal" command is received, print this message:
// "You have a new text message: {message}"

function solve(input) {

    let message = input.shift();

    for (let el of input) {
        if (el == 'Reveal') break;

        if (el.includes('InsertSpace')) {
            let [, idx] = el.split(':|:');
            message = message.slice(0, idx) + ' ' + message.slice(idx);
            console.log(message);

        } else if (el.includes('Reverse')) {
            let [, substring] = el.split(':|:');
            let idx = message.indexOf(substring)
            // if
            if (message.includes(substring)) {
                let cut = message.slice(idx, idx + substring.length)
                message = message.slice(0, idx) + '' + message.slice(idx + substring.length) + cut.split('').reverse().join('');
                console.log(message);
            } else {
                console.log('error');
            }

        } else if (el.includes('ChangeAll')) {
            let [, substring, replacement] = el.split(':|:');
            if (message.includes(substring)) {
                message = message.split(substring).join(replacement);
            }
            console.log(message);
        }
    }
    console.log(`You have a new text message: ${message}`);
}
// solve([
//     'heVVodar!gniV',
//     'ChangeAll:|:V:|:l',
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal'
// ])
solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
])