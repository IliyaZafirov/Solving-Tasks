// Problem 3 - The Pianist
// The problem for exam preparation for the Programming Fundamentals Course @SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/2525#2.

// You are a pianist, and you like to keep a list of your favorite piano pieces. Create a program to help you organize it and add, change, remove pieces from it!
// On the first line of the standard input, you will receive an integer n – the number of pieces you will initially have. On the next n lines, the pieces themselves will follow with their composer and key, separated by "|" in the following format: "{piece}|{composer}|{key}".
// Then, you will be receiving different commands, each on a new line, separated by "|", until the "Stop" command is given:
// "Add|{piece}|{composer}|{key}":
// You need to add the given piece with the information about it to the other pieces and print:
// "{piece} by {composer} in {key} added to the collection!"
// If the piece is already in the collection, print:
// "{piece} is already in the collection!"
// "Remove|{piece}":
// If the piece is in the collection, remove it and print:
// "Successfully removed {piece}!"
// Otherwise, print:
// "Invalid operation! {piece} does not exist in the collection."
// "ChangeKey|{piece}|{new key}":
// If the piece is in the collection, change its key with the given one and print:
// "Changed the key of {piece} to {new key}!"
// Otherwise, print:
// "Invalid operation! {piece} does not exist in the collection."
// Upon receiving the "Stop" command, you need to print all pieces in your collection in the following format:
// "{Piece} -> Composer: {composer}, Key: {key}"
// Input/Constraints
// You will receive a single integer at first – the initial number of pieces in the collection.
// For each piece, you will receive a single line of text with information about it.
// Then you will receive multiple commands in the way described above until the command "Stop".
// Output
// All the output messages with the appropriate formats are described in the problem description.

function solve(input) {

    let n = input.shift();
    let obj = {};

    for (let i = 0; i < n; i++) {
        let [piece, composer, key] = input[i].split('|');
        obj[piece] = [composer, key];
    }

    for (let i = n; i < input.length; i++) {
        if (input[i] == 'Stop') break;

        if (input[i].includes('Add')) {
            let [command, piece, composer, key] = input[i].split('|');
            if (!obj.hasOwnProperty(piece)) {
                obj[piece] = [composer, key];
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            } else {
                console.log(`${piece} is already in the collection!`);
            }
        } else if (input[i].includes('Remove')) {
            let [command, piece] = input[i].split('|');
            if (obj.hasOwnProperty(piece)) {
                delete obj[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }

        } else if (input[i].includes('ChangeKey')) {
            let [command, piece, newKey] = input[i].split('|');
            if (obj.hasOwnProperty(piece)) {
                obj[piece][1] = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }
    
    for (let property in obj) {
        console.log(`${property} -> Composer: ${obj[property][0]}, Key: ${obj[property][1]}`);
    }
}
solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
])
