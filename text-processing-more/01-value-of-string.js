// Value of a String
// Write a function, which finds the sum of the ASCII codes of the letters in a given string.Your tasks will be a bit
// harder because you will have to find the sum of either the lowercase or the uppercase letters.
// On the first line, you will receive the string.
// On the second line, you will receive one of two possible inputs:
// • If you receive "UPPERCASE" ➔ find the sum of all uppercase English letters in the previously received string
// • If you receive "LOWERCASE" ➔ find the sum of all lowercase English letters in the previously received
// string
// You should not sum the ASCII codes of any characters, which are not letters.
// At the end print the sum in the following format:
// • The total sum is: { sum }

function solve(input) {

    let [string, command] = input;

    let sumUpper = 0;
    let sumLower = 0;

    let sum = 0;

    for (let el of string) {

        if (command == 'UPPERCASE') {

            if (/[A-Z]/.test(el)) {
                let code = el.charCodeAt(0);
                sum += code
            }
        } else if (command == 'LOWERCASE') {

            if (/[a-z]/.test(el)) {
                let code = el.charCodeAt(0);
                sum += code;
            }
        }
    }
    console.log(`The total sum is: ${sum}`);
}
solve(['HelloFromMyAwesomePROGRAM',
    'LOWERCASE'])