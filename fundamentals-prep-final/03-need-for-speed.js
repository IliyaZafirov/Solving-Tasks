// Problem 3 - Need for Speed III
// The problem for exam preparation for the Programming Fundamentals Course @SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/2307#2.

// You have just bought the latest and greatest computer game – Need for Seed III. Pick your favorite cars and drive them all you want! We know that you can't wait to start playing.
// On the first line of the standard input, you will receive an integer n – the number of cars that you can obtain. On the next n lines, the cars themselves will follow with their mileage and fuel available, separated by "|" in the following format:
// "{car}|{mileage}|{fuel}"
// Then, you will be receiving different commands, each on a new line, separated by " : ", until the "Stop" command is given:
// "Drive : {car} : {distance} : {fuel}":
// You need to drive the given distance, and you will need the given fuel to do that. If the car doesn't have enough fuel, print: "Not enough fuel to make that ride"
// If the car has the required fuel available in the tank, increase its mileage with the given distance, decrease its fuel with the given fuel, and print: 
// "{car} driven for {distance} kilometers. {fuel} liters of fuel consumed."
// You like driving new cars only, so if a car's mileage reaches 100 000 km, remove it from the collection(s) and print: "Time to sell the {car}!"
// "Refuel : {car} : {fuel}":
// Refill the tank of your car. 
// Each tank can hold a maximum of 75 liters of fuel, so if the given amount of fuel is more than you can fit in the tank, take only what is required to fill it up. 
// Print a message in the following format: "{car} refueled with {fuel} liters"
// "Revert : {car} : {kilometers}":
// Decrease the mileage of the given car with the given kilometers and print the kilometers you have decreased it with in the following format:
// "{car} mileage decreased by {amount reverted} kilometers"
// If the mileage becomes less than 10 000km after it is decreased, just set it to 10 000km and 
// DO NOT print anything.
// Upon receiving the "Stop" command, you need to print all cars in your possession in the following format:
// "{car} -> Mileage: {mileage} kms, Fuel in the tank: {fuel} lt."
// Input / Constraints
// The mileage and fuel of the cars will be valid, 32-bit integers, and will never be negative.
// The fuel and distance amounts in the commands will never be negative.
// The car names in the commands will always be valid cars in your possession.
// Output
// All the output messages with the appropriate formats are described in the problem description.


function solve(input) {
    input.shift();

    let obj = {};
    for (let el of input) {
        if (el == 'Stop') break;

        if (el.includes('|')) {
            let [car, mil, fuel] = el.split('|');
            obj[car] = { mil: +mil, fuel: +fuel };

        } else if (el.includes('Drive')) {
            let [, car, distance, fuel] = el.split(' : ');
            if (obj[car].fuel >= +fuel) {
                obj[car].mil += +distance;
                obj[car].fuel -= +fuel;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            } else {
                console.log('Not enough fuel to make that ride');
            } 

            if (obj[car].mil >= 100000) {
                delete obj[car];
                console.log(`Time to sell the ${car}!`);
            }
        } else if (el.includes('Refuel')) {
            let [, car, fuel] = el.split(' : ');

            if (obj.hasOwnProperty(car)) {
                let maxFuel = obj[car].fuel + +fuel <= 75 ? +fuel : 75 - obj[car].fuel;
                obj[car].fuel += +maxFuel;
                console.log(`${car} refueled with ${maxFuel} liters`);
            }

        } else if (el.includes('Revert')) {
            let [, car, km] = el.split(' : ');
            if (obj.hasOwnProperty(car)) {
                obj[car].mil -= +km;
                if (obj[car].mil < 10000) {
                    obj[car].mil = 10000;
                } else {
                    console.log(`${car} mileage decreased by ${km} kilometers`);

                }
            }
        }
    }

    for (let property in obj) {
        console.log(`${property} -> Mileage: ${obj[property].mil} kms, Fuel in the tank: ${obj[property].fuel} lt.`);
    }
}
// solve([
//     '3',
//     'Audi A6|38000|62',
//     'Mercedes CLS|11000|35',
//     'Volkswagen Passat CC|45678|5',
//     'Drive : Audi A6 : 543 : 47',
//     'Drive : Mercedes CLS : 94 : 11',
//     'Drive : Volkswagen Passat CC : 69 : 8',
//     'Refuel : Audi A6 : 50',
//     'Revert : Mercedes CLS : 500',
//     'Revert : Audi A6 : 30000',
//     'Stop'
//   ])
solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ])