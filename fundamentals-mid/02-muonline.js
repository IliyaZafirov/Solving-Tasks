// Mu Online
// You have initial health 100 and initial bitcoins 0. You will be given a string representing the dungeon's rooms. Each room is separated with '|' (vertical bar): "room1|room2|room3…"
// Each room contains a command and a number, separated by space. The command can be:
// "potion"
// You are healed with the number in the second part. But your health cannot exceed your initial health (100).
// First print: "You healed for {amount} hp."
// After that, print your current health: "Current health: {health} hp."
// "chest"
// You've found some bitcoins, the number in the second part.
// Print: "You found {amount} bitcoins."
// In any other case, you are facing a monster, which you will fight. The second part of the room contains the attack of the monster. You should remove the monster's attack from your health. 
// If you are not dead (health <= 0), you've slain the monster, and you should print: "You slayed {monster}."
// If you've died, print "You died! Killed by {monster}." and your quest is over. Print the best room you've managed to reach: "Best room: {room}"
// If you managed to go through all the rooms in the dungeon, print on the following three lines: 
// "You've made it!
// Bitcoins: {bitcoins}
// Health: {health}"
// Input / Constraints
// You receive a string representing the dungeon's rooms, separated with '|' (vertical bar): "room1|room2|room3…".
// Output
// Print the corresponding messages described above.


function solve(input) {

    let health = 100;
    let coins = 0;
    let rooms = input.split('|');
    let bestRoom = 1;


    for (let room of rooms) {
        let tokens = room.split(' ');
        let command = tokens[0];
        let num = Number(tokens[1]);

        if (command == 'potion') {
            let newHP = health + num <= 100 ? num : 100 - health;
            health += newHP;
            console.log(`You healed for ${newHP} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command == 'chest') {
            coins += num;
            console.log(`You found ${num} bitcoins.`);
        } else {
            health -= num;
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${bestRoom}`);
                return;
            }
        }
        bestRoom++;
    }

    console.log(`You've made it!`)
    console.log(`Bitcoins: ${coins}`);
    console.log(`Health: ${health}`);


}


solve("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")