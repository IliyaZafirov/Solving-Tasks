function messageTranslator(input) {

    let n = +input.shift();
    let pattern = /(?<sep>!)(?<cmd>[A-Z][a-z]{2,})\1:\[(?<str>[A-Za-z]{8,})\]/g;

    for (let i = 0; i < n; i++) {
        let valid = pattern.exec(input[i]);

        if (valid) {
            let cmd = valid.groups['cmd'];
            let str = valid.groups['str'];
            let arr = [];
            for (let char of str) {
                arr.push(char.charCodeAt(0));
            }
            console.log(`${cmd}: ${arr.join(' ')}`);

        } else {
            console.log(`The message is invalid`);
        }
    }
}
// messageTranslator(["2",
//     "!Send!:[IvanisHere]",
//     "*Time@:[Itis5amAlready"])
messageTranslator(["3",
    "go:[outside]",
    "!drive!:YourCarToACarWash",
    "!Watch!:[LordofTheRings]"])