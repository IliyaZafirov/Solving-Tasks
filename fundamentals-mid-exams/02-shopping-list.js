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