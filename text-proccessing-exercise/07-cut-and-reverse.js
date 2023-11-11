// Cut and Reverse
// The input will be a single string.
// Write a function that cuts the given string into half and reverse the two halves.
// Print each half on a separate line.

function solve(str) {

    let middleIdx = str.length / 2;

    let firstHalf = str.slice(0, middleIdx).split('').reverse().join('');
    let secondHalf = str.slice(middleIdx).split('').reverse().join('');

    console.log(`${firstHalf}\n${secondHalf}}`);

}
solve('tluciffiDsIsihTgnizamAoSsIsihT')