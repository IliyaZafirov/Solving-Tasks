function solve(input) {

    let people = input.shift().split(', ');
    let blacklist = [];
    let command = input.shift();

    let lostNamesCount = 0;
    let blacklistCount = 0;

    while (command !== 'Report') {
        let tokens = command.split(' ')
        let action = tokens[0];


        if (action == 'Blacklist') {

            let name = tokens[1];

            if (people.includes(name)) {
                let index = people.indexOf(name);
                people[index] = 'Blacklisted'
                console.log(`${name} was blacklisted.`);
                blacklistCount++
                command = input.shift();
                blacklist.push(name)
                continue;
            }
            console.log(`${name} was not found.`);

        } else if (action == 'Error') {

            let index = +tokens[1];
            if (index >= 0 && index < people.length) {

                let element = people[index];

                if (element !== 'Blacklisted' && element !== 'Lost') {
                    console.log(`${people[index]} was lost due to an error.`);
                    people[index] = 'Lost';
                    lostNamesCount++;

                }
            }
        } else if (action == 'Change') {

            let index = +tokens[1];
            let newName = tokens[2];

            if (index >= 0 && index < people.length) {
                console.log(`${people[index]} changed his username to ${newName}.`);
                people[index] = newName;
            }
        }

        command = input.shift();
    }

    console.log(`Blacklisted names: ${blacklistCount}`);
    console.log(`Lost names: ${lostNamesCount}`);
    console.log(`${people.join(' ')}`);

}

solve(['Mike, John, Eddie',
    'Blacklist Mike',
    'Error 0',
    'Report'])


// solve(['Mike, John, Eddie, Wiliam',
//     'Error 3',
//     'Error -3',
//     'Error 3',
//     'Error 1',
//     'Error 8',
//     'Blacklist NaskoFasaOtZapasa',
//     'Blacklist Wiliam',
//     'Blacklist Eddie',
//     'Blacklist Lost',
//     'Change 0 Mike123',
//     'Change 9 NaskoFasa',
//     'Change -1 Matraka',
//     'Report'])

// solve(['Mike, John, Eddie, William',
//     'Blacklist Maya',
//     'Error 1',
//     'Change 4 George',
//     'Report'])