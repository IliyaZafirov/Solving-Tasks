function solve(inputArr) {

    let journal = inputArr.shift();
    let inventory = journal.split(', ');

    let index = 0;
    let command = inputArr[index];

    while (command !== 'Craft!') {
        let tokens = command.split(' - ');
        let doThis = tokens[0];
        let item = tokens[1];

        if (doThis == 'Collect') {
            if (inventory.includes(item)) {
                break;
            } else {
                inventory.push(item);
            }
        } else if (doThis == 'Drop') {
            if (inventory.includes(item)) {
                let indexForDel = inventory.indexOf(item);
                inventory.splice(indexForDel, 1);
            }
        } else if (doThis == 'Combine Items') {
            let splitted = tokens[1].split(':');
            let oldItem = splitted[0];
            let newItem = splitted[1];
            if (inventory.includes(oldItem)) {
                let oldItemIdx = inventory.indexOf(oldItem);
                inventory.splice(oldItemIdx + 1, 0, newItem);
            }
        } else if (doThis == 'Renew') {
            // if (inventory.includes(item)) {
            //     inventory = inventory.filter(x => x !== item);
            //     inventory.push(item);
            //  }
            if (inventory.includes(item)) {
                let renewIdx = inventory.indexOf(item);
                let renewItem = inventory.splice(renewIdx, 1);
                inventory.push(renewItem.join(''));
            }

        }
        index++;
        command = inputArr[index];


    }

    console.log(inventory.join(', '));


}


// solve([
//     'Iron, Wood, Sword',
//     'Collect - Gold',
//     'Drop - Wood',
//     'Craft!'
// ])

solve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
])