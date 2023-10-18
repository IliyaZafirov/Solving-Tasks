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