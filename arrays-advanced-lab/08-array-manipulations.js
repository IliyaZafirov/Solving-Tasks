// 8. Array Manipulations
// Write a function that manipulates an array of numbers.
// • Add {number}: add a number to the end of the array
// • Remove {number}: remove all occurrences of a particular number from the array
// • RemoveAt {index}: removes number at a given index
// • Insert {number} {index}: inserts a number at a given index
// Note: All the indices will be valid!
// The input comes as an array of strings. The first element will be a string containing the array to manipulate. Every
// other command you receive will also be a string.
// The output is the manipulated array printed on the console on a single line, separated by space

function solve(commands) {

    let arr = commands.shift().split(' ').map(Number);

   for (let i = 0; i < commands.length; i++) {

    let tokens = commands[i].split(' ');

    let cmd = tokens[0];
    let num = tokens[1];

    console.log(cmd);
   }

}

solve(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3'])






// for (let i = 0; i < arr.length; i++) {
//     let [command, firstNum, secondNum] = commands[i].split(' ');
//     firstNum = Number(firstNum);
//     secondNum = Number(secondNum);
//     switch (command) {
//         case 'Add':
//             let add = x => arr.push(x);
//             break;
//         case 'Remove':
//             let remove = num => arr.filter(x => x !== num);
//             break;
//         case 'RemoveAt':
//             let removeAt = index => arr.splice(index, 1);
//             break;
//         case 'Insert':
//             let insert = (num, index) => arr.splice(index, 0 , num);
            
//             break;

//         default:
//             break;
//     }
// }