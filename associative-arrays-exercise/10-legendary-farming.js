// *Legendary Farming
// You’ve beaten all the content and the last thing left to accomplish is to own a legendary item. However, it’s a
// tedious process and requires quite a bit of farming. Anyway, you are not too pretentious – any legendary will do.
// The possible items are:
// • "Shadowmourne" – requires 250 Shards
// • "Valanyr" – requires 250 Fragments
// • "Dragonwrath" – requires 250 Motes
// "Shards", "Fragments", and "Motes" are the key materials, all else is junk.
// You will be given lines of input in the format:
// "{quantity1} {material1} {quantity2} {material2} … {quantityN} {materialN}"
// Keep track of the key materials - the first that reaches the 250 mark wins the race. At that point, print the
// corresponding legendary obtained.
// Then, print the remaining shards, fragments, motes, ordered by quantity in descending order, then by name in
// ascending order, each on a new line. Finally, print the collected junk items, in alphabetical order.
// Input
// • Each line comes in the following format:
// {quantity1} {material1} {quantity2} {material2} … {quantityN} {materialN}
// Output
// • On the first line, print the obtained item in format: "{Legendary item} obtained!"
// • On the next three lines, print the remaining key materials in descending order by quantity
// o If two key materials have the same quantity, print them in alphabetical order
// • On the final several lines, print the junk items in alphabetical order
// o All materials are printed in format "{material}: {quantity}"
// o All output should be lowercase, except the first letter of the legendary

function farming(str) {

    let splitted = str.split(' ');

    let inventory = { shards: 0, fragments: 0, motes: 0 };
    let junk = {};
    let legendaries = { shards: 'Shadowmourne', fragments: 'Valanyr', motes: 'Dragonwrath' }


    for (let i = 0; i < splitted.length; i += 2) {

        let qty = Number(splitted[i]);
        let material = splitted[i + 1].toLowerCase();

        if (material in inventory) {
            inventory[material] += qty;
            if (inventory[material] >= 250) {
                inventory[material] -= 250;
                let legendaryWon = legendaries[material];
                console.log(`${legendaryWon} obtained!`);
                break;
            }
        } else {
            if (material in junk) {
                junk[material] += qty;

            } else {
                junk[material] = qty;
            }
        }

    }

    let entries = Object.entries(inventory).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    for (let entry of entries) {
        console.log(entry.join(': '));
    }

    let junkEntries = Object.entries(junk).sort((a, b) => a[0].localeCompare(b[0]));

    for (let entry of junkEntries) {
        console.log(entry.join(': '));
    }


}

farming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')
// farming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver' )