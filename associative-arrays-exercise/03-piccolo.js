// Piccolo
// Write a function that:
// • Records a car number for every car that enters the parking lot
// • Removes a car number when the car goes out
// • Input will be an array of strings in format [direction, carNumber]
// Print the output with all car numbers which are in the parking lot sorted in ascending by number.
// If the parking lot is empty, print: "Parking Lot is Empty".



function solve(input) {

    let obj = {}
    for (let elem of input) {
        let [direction, carNumber] = elem.split(', ');

        if (!(carNumber in obj)) {
            if (direction == 'IN') {
                obj[carNumber] = direction;
            }

        } else {
            if (direction == 'OUT') {
                delete obj[carNumber];
            }
        }
    }
    let keys = Object.keys(obj).sort()

    keys.length == 0 ? console.log('Parking lot is Empty') : console.log(keys.join(' \n'));

}
solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)