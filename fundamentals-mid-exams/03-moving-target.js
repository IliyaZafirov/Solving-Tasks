// Moving Target
// You are at the shooting gallery again, and you need a program that helps you keep track of moving targets. On the first line, you will receive a sequence of targets with their integer values, split by a single space. Then, you will start receiving commands for manipulating the targets until the "End" command. The commands are the following:
// "Shoot {index} {power}"
// Shoot the target at the index if it exists by reducing its value by the given power (integer value). 
// Remove the target if it is shot. A target is considered shot when its value reaches 0.
// "Add {index} {value}"
// Insert a target with the received value at the received index if it exists. 
// If not, print: "Invalid placement!"
// "Strike {index} {radius}"
// Remove the target at the given index and the ones before and after it depending on the radius.
// If any of the indices in the range is invalid, print: "Strike missed!" and skip this command.
//  Example:  "Strike 2 2"
// 	{radius}	{radius}	{strikeIndex}	{radius}	{radius}		
// "End"
// Print the sequence with targets in the following format and end the program:
// "{target1}|{target2}…|{targetn}"
// Input / Constraints
// On the first line, you will receive the sequence of targets – integer values [1-10000].
// On the following lines, until the "End" will be receiving the command described above – strings.
// There will never be a case when the "Strike" command would empty the whole sequence.
// Output
// Print the appropriate message in case of any command if necessary.
// In the end, print the sequence of targets in the format described above.


function solve(input) {

    let targets = input.shift().split(' ').map(Number);
    let command = input.shift();

    while (command !== 'End') {
        let tokens = command.split(' ');
        let action = tokens[0];
        let index = +tokens[1];

        if (action == 'Shoot') {
            let power = +tokens[2];

            if (index >= 0 && index < targets.length) {
                targets[index] -= power;

                if (targets[index] <= 0) {
                    targets.splice(index, 1);
                }
            }

        } else if (action == 'Add') {
            let value = +tokens[2];

            if (index >= 0 && index < targets.length) {
                targets.splice(index, 0, value);
            } else {
                console.log("Invalid placement!");
            }
        } else if (action == 'Strike') {
            let radius = +tokens[2];
            if (index >= 0 & index < targets.length) {
                if (index - radius >= 0 && index + radius < targets.length) {
                    targets.splice(index - radius, radius + radius + 1);
                } else {
                    console.log('Strike missed!');
                }
            }
        }
        command = input.shift();
    }
    console.log(targets.join('|'));
}
solve(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"])

// solve(["1 2 3 4 5",
//     "Strike 0 1",
//     "End"])