// Array Manipulations
// Write a function that manipulates an array of numbers.
// • Add {number}: add a number to the end of the array
// • Remove {number}: remove all occurrences of a particular number from the array
// • RemoveAt {index}: removes number at a given index
// • Insert {number} {index}: inserts a number at a given index
// Note: All the indices will be valid!
// The input comes as an array of strings. The first element will be a string containing the array to manipulate. Every
// other command you receive will also be a string.
// The output is the manipulated array printed on the console on a single line, separated by space.

function solve(inputArr) {

    let arr = inputArr.shift().split(' ');

    for (let elem of inputArr) {
        let tokens = elem.split(' ');
        let command = tokens[0];
        let numOrIdx = tokens[1];
        let index = tokens[2];

        if (command == 'Add') {
                arr.push(numOrIdx);
        } else if (command == 'Remove') {
                if (arr.includes(numOrIdx)) {
                    
                    for (let els of arr) {
                        if (els == numOrIdx) {
                            let index = arr.indexOf(els);
                            arr.splice(index, 1);
                        }
                    }
                }
        } else if (command == 'RemoveAt') {
            arr.splice(numOrIdx, 1);
        } else if (command == 'Insert') {
            arr.splice(index, 0, numOrIdx);
        }
    }
    
    console.log(arr.join(' '));
}

solve(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
)