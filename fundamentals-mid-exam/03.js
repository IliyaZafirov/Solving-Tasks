function solve(input) {

    let cards = input.shift().split(', ');
    let num = input.shift();

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(', ');

        if (tokens[0] == 'Add') {
            let name = tokens[1];
            if (!cards.includes(name)) {
                console.log('Card successfully added');
                cards.push(name);
                continue;
            }
            console.log(`Card is already in the deck`);


        } else if (tokens[0] == 'Remove') {
            let name = tokens[1];
            if (cards.includes(name)) {
                let index = cards.indexOf(name);
                cards.splice(index, 1);
                console.log('Card successfully removed');
                continue;
            }
            console.log('Card not found');

        } else if (tokens[0] == 'Remove At') {
            let index = +tokens[1];
            if (index >= 0 && index <= cards.length) { 
                cards.splice(index, 1);
                console.log('Card successfully removed');
                continue;
            }
            console.log('Index out of range');


        } else if (tokens[0] == 'Insert') {
            let index = tokens[1];
            let name = tokens[2];

            if (index >= 0 && index <= cards.length) { 
                if (cards.includes(name)) {
                    console.log('Card is already added');
                    continue;
                }

                cards.splice(index, 0, name)
                console.log('Card successfully added');
                continue;
            }
            console.log('Index out of range'); // works

        }

    }

    console.log(cards.join(', '));


}

solve(['Ace of Diamonds, Queen of Hearts, King of Clubs',
    '3',
    'Add, King Of Diamonds',
    'Insert, 2, Jack of Spades',
    'Remove, Ace of Diamonds',
    'Remove, Nasko Fasa',
    'Insert, -1, Queen of Spades',
    'Remove At, 1'])

// solve(['Jack of Spades, Ace of Clubs, Jack of Clubs',
//     '2',
//     'Insert, -1, Queen of Spades',
//     'Remove At, 1'])