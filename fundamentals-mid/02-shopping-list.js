// Shopping List
// It's the end of the week, and it is time for you to go shopping, so you need to create a shopping list first.
// Input
// You will receive an initial list with groceries separated by an exclamation mark "!".
// After that, you will be receiving 4 types of commands until you receive "Go Shopping!".
// "Urgent {item}" - add the item at the start of the list.  If the item already exists, skip this command.
// "Unnecessary {item}" - remove the item with the given name, only if it exists in the list. Otherwise, skip this command.
// "Correct {oldItem} {newItem}" - if the item with the given old name exists, change its name with the new one. Otherwise, skip this command.
// "Rearrange {item}" - if the grocery exists in the list, remove it from its current position and add it at the end of the list. Otherwise, skip this command.
// Constraints
// There won't be any duplicate items in the initial list.
// Output
// Print the list with all the groceries, joined by ", ":
// "{firstGrocery}, {secondGrocery}, … {nthGrocery}"


function solve(arr) {

    let list = arr.shift().split('!');
    // console.log(list);

    
    for (let els of arr) {
        let tokens = els.split(' ');
        let command = tokens[0];
        let item = tokens[1];

        if (command == 'Urgent') {
            if (!list.includes(item)) {
                list.unshift(item);
            }
        } else if (command == 'Unnecessary') {
            if (list.includes(item)) {
                let index = list.indexOf(item);
                list.splice(index, 1);
            }
        } else if (command == 'Correct') {
            let newItem = tokens[2];
            if (list.includes(item)) {
                let index = list.indexOf(item);
                // list[index] = newItem;
                list.splice(index, 1, newItem)
            }
        } else if (command == 'Rearrange') {
            if (list.includes(item)) {
                let index = list.indexOf(item);
                let forMove = list.splice(index, 1)
                list.push(forMove);
            }
        } else if (command == 'Go') {
            console.log(list.join(', '));
        }
    }
    


}

solve(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"])

// solve(["Milk!Pepper!Salt!Water!Banana",
//     "Urgent Salt",
//     "Unnecessary Grapes",
//     "Correct Pepper Onion",
//     "Rearrange Grapes",
//     "Correct Tomatoes Potatoes",
//     "Go Shopping!"])