function solve(input) {

    let n = input.shift();
    let obj = {};

    for (let i = 0; i < n; i++) {

        let [piece, composer, key] = input[i].split('|')

        obj[piece] = [composer, key] ;
       
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
                delete obj[piece]
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