// Problem 3 - Heroes of Code and Logic VII
// Link: https://judge.softuni.org/Contests/Practice/Index/2303#2
// You got your hands on the most recent update on the best MMORPG of all time – Heroes of Code and Logic. You want to play it all day long! So cancel all other arrangements and create your party!
// On the first line of the standard input, you will receive an integer n – the number of heroes that you can choose for your party. On the next n lines, the heroes themselves will follow with their hit points and mana points separated by a single space in the following format: 
// "{hero name} {HP} {MP}"
// HP stands for hit points and MP for mana points
// a hero can have a maximum of 100 HP and 200 MP
// After you have successfully picked your heroes, you can start playing the game. You will be receiving different commands, each on a new line, separated by " – ", until the "End" command is given. 
// There are several actions that the heroes can perform:
// "CastSpell – {hero name} – {MP needed} – {spell name}"
// If the hero has the required MP, he casts the spell, thus reducing his MP. Print this message: 
// "{hero name} has successfully cast {spell name} and now has {mana points left} MP!"
// If the hero is unable to cast the spell print:
// "{hero name} does not have enough MP to cast {spell name}!"
// "TakeDamage – {hero name} – {damage} – {attacker}"
// Reduce the hero HP by the given damage amount. If the hero is still alive (his HP is greater than 0) print:
// "{hero name} was hit for {damage} HP by {attacker} and now has {current HP} HP left!"
// If the hero has died, remove him from your party and print:
// "{hero name} has been killed by {attacker}!"
// "Recharge – {hero name} – {amount}"
// The hero increases his MP. If it brings the MP of the hero above the maximum value (200), MP is increased to 200. (the MP can't go over the maximum value).
//  Print the following message:
// "{hero name} recharged for {amount recovered} MP!"
// "Heal – {hero name} – {amount}"
// The hero increases his HP. If a command is given that would bring the HP of the hero above the maximum value (100), HP is increased to 100 (the HP can't go over the maximum value).
//  Print the following message:
// "{hero name} healed for {amount recovered} HP!"
// Input
// On the first line of the standard input, you will receive an integer n
// On the following n lines, the heroes themselves will follow with their hit points and mana points separated by a space in the following format
// You will be receiving different commands, each on a new line, separated by " – ", until the "End" command is given
// Output
// Print all members of your party who are still alive, in the following format (their HP/MP need to be indented 2 spaces):
// "{hero name}
//   HP: {current HP}
//   MP: {current MP}"
// Constraints
// The starting HP/MP of the heroes will be valid, 32-bit integers will never be negative or exceed the respective limits.
// The HP/MP amounts in the commands will never be negative.
// The hero names in the commands will always be valid members of your party. No need to check that explicitly.

function solve(input) {

    let n = Number(input.shift());

    let obj = {};

    for (let i = 0; i < n; i++) {
        let heroes = input.shift();
        let [hero, hp, mana] = heroes.split(' ');
        obj[hero] = { hp: +hp, mana: +mana }

    }

    for (let el of input) {

        if (el.includes('CastSpell')) {
            let [, hero, manaCost, spell] = el.split(' - ');
            if (obj[hero].mana >= +manaCost) {
                obj[hero].mana -= +manaCost;
                console.log(`${hero} has successfully cast ${spell} and now has ${obj[hero].mana} MP!`);
            } else {
                console.log(`${hero} does not have enough MP to cast ${spell}!`);
            }

        } else if (el.includes('TakeDamage')) {
            let [, hero, dmg, attacker] = el.split(' - ');
            if (obj[hero].hp > 0) {
                obj[hero].hp -= +dmg;
                if (obj[hero].hp > 0) {
                    console.log(`${hero} was hit for ${dmg} HP by ${attacker} and now has ${obj[hero].hp} HP left!`);
                } else {
                    delete obj[hero];
                    console.log(`${hero} has been killed by ${attacker}!`);
                }
            }

        } else if (el.includes('Recharge')) {
            let [, hero, amount] = el.split(' - ');
            let newMana = obj[hero].mana + +amount <= 200 ? +amount : 200 - obj[hero].mana;
            obj[hero].mana += +newMana;

            console.log(`${hero} recharged for ${newMana} MP!`);


        } else if (el.includes('Heal')) {
            let [, hero, amount] = el.split(' - ');
            let newHP = obj[hero].hp + +amount <= 100 ? +amount : 100 - obj[hero].hp;
            obj[hero].hp += +newHP;

            console.log(`${hero} healed for ${newHP} HP!`);

        }
    }

    for (let property in obj) {
        console.log(`${property}\n HP: ${obj[property].hp}\n MP: ${obj[property].mana}`);
    }
}
// solve([
//      2,
//     'Solmyr 85 120',
//     'Kyrre 99 50',
//     'Heal - Solmyr - 10',
//     'Recharge - Solmyr - 50',
//     'TakeDamage - Kyrre - 66 - Orc',
//     'CastSpell - Kyrre - 15 - ViewEarth',
//     'End'])
solve([
    4,
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End',
])