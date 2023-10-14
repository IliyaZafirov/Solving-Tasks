// *Gladiator Inventory
// As a gladiator, Peter has a cool Inventory. He loves to buy new equipment. You are given Peter’s inventory with all
// of his equipment -> strings, separated by whitespace.
// You may receive the following commands:
// • Buy {equipment}
// • Trash {equipment}
// • Repair {equipment}
// • Upgrade {equipment}-{upgrade}
// If you receive the Buy command, you should add the equipment at the last position in the inventory, but only if it
// isn't bought already.
// If you receive the Trash command, delete the equipment if it exists.
// If you receive the Repair command, you should repair the equipment if it exists and place it in the last position.
// If you receive the Upgrade command, you should check if the equipment exists and insert after it the upgrade in
// the following format: "{equipment}:{upgrade}".
// Input / Consrtaints
// You will receive an array of strings. Each element of the array is a command.
// • In the first input element, you will receive Peter's inventory – a sequence of equipment names, separated
// by space.
// Output
// As output, you must print Peter's inventory on one line, separated by a space.
// Constraints
// • The command will always be valid.
// • The equipment and Upgrade will be strings and will contain any character, except '-'.
// • Allowed working time / memory: 100ms / 16MB.
// © SoftUni – https://softuni.org. Copyrighted document. Unauthorized copy, reproduction or use is not permitted.


function solve(arr) {

    let inventory = arr.shift().split(' ');

    for (let els of arr) {
        let tokens = els.split(' ');
        let cmd = tokens[0];
        let equipment = tokens[1];

        if (cmd == 'Buy') {
            inventory.push(equipment)
        } else if (cmd == 'Trash') {
            if (inventory.includes(equipment)) {
                let indexForDelete = inventory.indexOf(equipment);
                inventory.splice(indexForDelete, 1);
            }
        } else if (cmd == 'Repair') {
            if (inventory.includes(equipment)) {
                let indexForRepair = inventory.indexOf(equipment);
                inventory.push(inventory[indexForRepair]);
                inventory.splice(indexForRepair, 1);
            }
        } else if (cmd == 'Upgrade') {
            let tokens = equipment.split('-');
            let item = tokens[0];
            let enchant = tokens[1];
            if (inventory.includes(item)) {
                let index = inventory.indexOf(item);
                inventory.splice(index, 0, `${item}:${enchant}`);
            }
        }
    }
    console.log(inventory.join(' '));
}

solve(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel', 'SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel'])
// solve(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V'])