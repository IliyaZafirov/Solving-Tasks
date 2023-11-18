// *Star Enigma
// The war is at its peak, but you, young Padawan, can turn the tides with your programming skills. You are tasked to
// create a program to decrypt the messages of The Order and prevent the death of hundreds of lives.
// You will receive several messages, which are encrypted using the legendary star enigma. You should decrypt the
// messages, following these rules:
// To properly decrypt a message, you should count all the letters [s, t, a, r] – case insensitive and remove the count
// from the current ASCII value of each symbol of the encrypted message.
// After decryption:
// Each message should have a planet name, population, attack type ('A', as an attack or 'D', as destruction), and soldier
// count.
// The planet name starts after '@' and contains only letters from the Latin alphabet.
// The planet population starts after ':' and is an Integer;
// The attack type may be "A"(attack) or "D"(destruction) and must be surrounded by "!" (exclamation mark).
// The soldier count starts after "->" and should be an Integer.
// The order in the message should be: planet name -> planet population -> attack type -> soldier count. Each part can
// be separated from the others by any character except: '@', '-', '!', ':' and '>'.
// Input / Constraints
// • The first line holds n – the number of messages– integer in the range [1…100];
// • On the next n lines, you will be receiving encrypted messages.
// Output
// After decrypting all messages, you should print the decrypted information in the following format:
// First print the attacked planets, then the destroyed planets.
// "Attacked planets: {attackedPlanetsCount}"
// "-> {planetName}"
// "Destroyed planets: {destroyedPlanetsCount}"
// "-> {planetName}"
// The planets should be ordered by name alphabetically.

function solve(arr) {

    let msgCount = Number(arr.shift());
    let decryptedMsgs = [];

    let starPattern = /[star]/gi;

    for (let i = 0; i < msgCount; i++) {
        let msg = arr[i];
        let decryptedMsg = '';

        let matches = msg.match(starPattern);

        if (matches) {
            let count = matches.length;

            for (let char of msg) {
                let code = char.charCodeAt(0);
                code -= count;

                let newChar = String.fromCharCode(code);
                decryptedMsg += newChar;
            }
        } else {
            decryptedMsg = msg;
        }
        decryptedMsgs.push(decryptedMsg);
    }

    let decryptedPattern = /@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<type>[AD])![^@\-!:>]*->(?<soldiers>\d+)/gi;
    let valid = decryptedPattern.exec(decryptedMsgs);

    let attacked = [];
    let destroyed = [];

    while (valid !== null) {

        let name = valid.groups['name'];
        let population = valid.groups['population'];
        let type = valid.groups['type'];
        let soldiers = valid.groups['soldiers'];

        if (type == 'A' || type == 'a') {
            attacked.push(name);

        } else if (type == 'D' || type == 'd') {
            destroyed.push(name);

        }

        valid = decryptedPattern.exec(decryptedMsgs);
    }

    console.log(`Attacked planets: ${attacked.length}`);
    if (attacked.length > 0) {
        attacked.sort((a, b) => a.localeCompare(b)).forEach(el => console.log(`-> ${el}`));
    }
    console.log(`Destroyed planets: ${destroyed.length}`);
    if (destroyed.length > 0) {
        destroyed.sort((a, b) => a.localeCompare(b)).forEach(el => console.log(`-> ${el}`));
    }

}
// solve(['2',
//     'STCDoghudd4=63333$D$0A53333',
//     'EHfsytsnhf?8555&I&2C9555SR'])
solve(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR']
)