// During World War 2, you are a mathematician who joined the cryptography team to decipher the enemy's enigma code. Your job is to create a program to crack the codes. 
// On the first line of the input, you will receive the encrypted message. After that, until the "Decode" command is given, you will be receiving strings with instructions for different operations that need to be performed upon the concealed message to interpret it and reveal its true content. There are several types of instructions, split by '|'
// "Move {number of letters}":
// Moves the first n letters to the back of the string
// "Insert {index} {value}":
// Inserts the given value before the given index in the string
// "ChangeAll {substring} {replacement}":
// Changes all occurrences of the given substring with the replacement text
// Input / Constraints
// On the first line, you will receive a string with a message.
// On the following lines, you will be receiving commands, split by '|' .
// Output
// After the "Decode" command is received, print this message:
// "The decrypted message is: {message}"

function solve(input) {

    let message = input.shift();

    for (let el of input) {
        if (el == 'Decode') break;

        if (el.includes('Move')) {
            let [, num] = el.split('|');
            message = message.slice(+num) + message.slice(0, +num);

        } else if (el.includes('Insert')) {
            let [, idx, val] = el.split('|');
            message = message.split('');
            message.splice(+idx, 0, val);
            message = message.join('');

        } else if (el.includes('ChangeAll')) {
            let [, substring, replacement] = el.split('|');
            message = message.split(substring).join(replacement);

        }
    }

    console.log(`The decrypted message is: ${message}`);

}
solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
])