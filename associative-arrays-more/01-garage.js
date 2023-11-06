// Garage
// Write a function that stores cars in garages. You will be given an array of strings. Each string will contain a number
// of a garage and info about a car. You have to store the car (with its info) in the given garage. The info about the car
// will be in the format:
// "{key1}: {value1}, {key2}: {value2}…"
// If the garage does not exist, create it. The cars will always be unique. At the end print the result in the format:
// "Garage № {number}:
// --- {carOneKeyOne} - {carOneValueOne}, {carOneKeyTwo} - {carOneValueTwo}…
// --- {the same for the next car}
// Garage № {number}: …"

function solve(arr) {

    let parking = {};

    for (let elem of arr) {
        let [garage, ...car] = elem.split(' - ');

        if (garage in parking) {
            parking[garage].push(...car)
            continue;
        }
        parking[garage] = car;

    }

    for (let entry of Object.entries(parking)) {

        console.log(`Garage № ${entry[0]}`)
        for (let elem of entry[1]) {
            // elem.replaceAll(':', ' -') // replaceAll not work in judge
            console.log(`--- ${elem.replace(/\:/g, ' -')}`);

        }
    }
}
solve([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])

// solve(['1 - color: green, fuel type: petrol',
//     '1 - color: dark red, manufacture: WV',
//     '2 - fuel type: diesel',
//     '3 - color: dark blue, fuel type: petrol'])
