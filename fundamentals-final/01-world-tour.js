// Problem 1 - World Tour
// The problem for exam preparation for the Programming Fundamentals Course @SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/2518#0.

// You are a world traveler, and your next goal is to make a world tour. To do that, you have to plan out everything first. To start with, you would like to plan out all of your stops where you will have a break.
// On the first line, you will be given a string containing all of your stops. Until you receive the command "Travel", you will be given some commands to manipulate that initial string. The commands can be:
// "Add Stop:{index}:{string}":i
// Insert the given string at that index only if the index is valid.
// "Remove Stop:{start_index}:{end_index}":
// Remove the elements of the string from the starting index to the end index (inclusive) if both indices are valid.
// "Switch:{old_string}:{new_string}":
// If the old string is in the initial string, replace it with the new one (all occurrences).
// Note: After each command, print the current state of the string!
// After the "Travel" command, print the following: "Ready for world tour! Planned stops: {string}".
// Input / Constraints
// JavaScript: you will receive a list of strings.
// An index is valid if it is between the first and the last element index (inclusive) (0 ….. Nth) in the sequence.
// Output
// Print the proper output messages in the proper cases as described in the problem description.

function solve(input) {

    let stops = input.shift();

    for (let line of input) {
        if (line == 'Travel') {
            console.log(`Ready for world tour! Planned stops: ${stops}`);
            break;
        }
        let [cmd, arg1, arg2] = line.split(':')

        switch (cmd) {
            case 'Add Stop':
                let indexToAdd = Number(arg1);
                let stringToAdd = arg2;
                if (indexToAdd >= 0 && indexToAdd < stops.length) {
                    stops = stops.slice(0, indexToAdd) + stringToAdd + stops.slice(indexToAdd)
                }
                break;
            case 'Remove Stop':
                let startIdx = Number(arg1);
                let endIdx = Number(arg2);
                if (startIdx >= 0 && endIdx < stops.length && startIdx <= endIdx) {
                    stops = stops.slice(0, startIdx) + stops.slice(endIdx + 1);
                }
                break;
            case 'Switch':
                let oldString = arg1;
                let newString = arg2;
                stops = stops.split(oldString).join(newString);
                break;

            default:
                break;
        }
        console.log(stops);
    }
}
// solve(["Hawai::Cyprys-Greece",
//     "Add Stop:7:Rome",
//     "Remove Stop:11:16",
//     "Switch:Hawai:Bulgaria",
//     "Travel"])

solve(['Albania:Bulgaria:Cyprus:Deuchland',
    'Add Stop:3:Nigeria',
    'Remove Stop:4:8',
    'Switch:Albania: Azərbaycan',
    'Travel'])