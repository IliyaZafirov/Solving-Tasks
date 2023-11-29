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

    for (let el of input) {
        if (el == 'Travel') {
            console.log(`Ready for world tour! Planned stops: ${stops}`);
            break;

        }
        if (el.includes('Add Stop')) {
            let [, idx, string] = el.split(':');
            if (Number(idx) >= 0 && Number(idx) < stops.length) {
                stops = stops.slice(0, Number(idx)) + string + stops.slice(Number(idx));
            }
            console.log(stops);
        } else if (el.includes('Remove Stop')) {
            let [, startIdx, endIdx] = el.split(':');
            if (Number(startIdx) >= 0 && Number(endIdx) < stops.length) {
                stops = stops.slice(0, Number(startIdx)) + stops.slice(Number(endIdx) + 1);
            }
            console.log(stops);

        } else if (el.includes('Switch')) {
            let [, oldStr, newStr] = el.split(':');

            stops = stops.split(oldStr).join(newStr);

            console.log(stops);
        }
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