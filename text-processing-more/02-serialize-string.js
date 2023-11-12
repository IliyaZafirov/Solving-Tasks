// Serialize String
// You have been tasked to serialize a string. The serialization is done specially, in which a character from that string is
// saved with the indexes at which it is found.
// The input will consist array, containing a single string, which may consist of ANY ASCII characters. Your task is to
// serialize the string in the following way:
// {char}:{index1}/{index2}/{index3}
// The char will be the character, and the indexes will be the indexes it is found at in the string.

function solve(input) {

    let str = input.shift();
    let arr = [];
    let obj = {};

    for (let i = 0; i < str.length; i++) {

        arr.push(str[i])
        arr.push(i)
    }

    for (let i = 0; i < arr.length; i += 2) {
        let char = arr[i];
        let idx = arr[i + 1];

        if (!obj.hasOwnProperty(char)) {
            obj[char] = idx + '/';
        } else {
            obj[char] += idx + '/';
        }
    }

    let entries = Object.entries(obj)

    for (let entry of entries) {
        let char = entry[0];
        let idx = entry[1].split('/');
        idx.pop();

        console.log(`${char}:${idx.join('/')}`);
    }
}
// solve(["abababa"])
solve(["avjavamsdmcalsdm"])