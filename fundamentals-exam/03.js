function degustationParty(input) {

    let obj = {};
    let unlikedCount = 0;

    for (let el of input) {
        if (el == 'Stop') break;

        let [command, guest, meal] = el.split('-');

        switch (command) {
            case 'Like':
                if (!obj.hasOwnProperty(guest)) {
                    obj[guest] = [meal];
                } else {
                    if (obj[guest].join(' ').includes(meal)) {
                        // console.log('includes');

                    } else {
                        obj[guest].push(meal);

                    }
                }
                break;
            case 'Dislike':
                if (!obj.hasOwnProperty(guest)) {
                    console.log(`${guest} is not at the party.`);
                } else {
                    if (!obj[guest].join(' ').includes(meal)) {
                        console.log(`${guest} doesn't have the ${meal} in his/her collection.`);

                    } else {
                        unlikedCount++;
                        obj[guest].splice(obj[guest].indexOf(meal), 1)
                        console.log(`${guest} doesn't like the ${meal}.`);

                    }
                }

                break;
            default:
                break;
        }
    }
    for (let property in obj) {
        console.log(`${property}: ${obj[property].join(', ')}`);

    }
    console.log(`Unliked meals: ${unlikedCount}`);

}
// degustationParty([
//     "Like-Krisi-shrimps",
//     "Like-Krisi-soup",
//     "Like-Krisi-shrimps",
//     "Like-Penelope-dessert",
//     "Like-Misho-salad",
//     "Stop"])
// degustationParty([
//     "Like-Krisi-shrimps",
//     "Dislike-Vili-carp",
//     "Dislike-Krisi-salad",
//     "Stop"])
degustationParty([
    "Like-Katy-fish",
    "Dislike-Katy-fish",
    "Stop"])
