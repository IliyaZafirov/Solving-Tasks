// SoftUni Bar Income
// Let`s take a break and visit the game bar at SoftUni. It is about time for the people behind the bar to go home and
// you are the person who has to draw the line and calculate the money from the products that were sold throughout
// the day. Until you receive a line with the text "end of shift" you will be given lines of input. But before
// processing that line you have to do some validations first.
// Each valid order should have a customer, product, count, and a price:
// • Valid customer's name should be surrounded by '%' and must start with a capital letter, followed by lowercase letters
// • Valid product contains any word character and must be surrounded by '<' and '>'
// • Valid count is an integer, surrounded by '|'
// • Valid price is any real number followed by '$'
// The parts of a valid order should appear in the order given: customer, product, count, and price.
// Between each part there can be other symbols, except ('|', '$', '%' and '.')
// For each valid line print on the console: "{customerName}: {product} - {totalPrice}"
// When you receive "end of shift" print the total amount of money for the day rounded to 2 decimal places in
// the following format: "Total income: {income}".
// Input / Constraints
// • Strings that you have to process until you receive text "end of shift".
// Output
// • Print all of the valid lines in the format "{customerName}: {product} - {totalPrice}"
// • After receiving "end of shift" print the total amount of money for the day rounded to 2 decimal places
// in the following format: "Total income: {income}"
// • Allowed working time / memory: 100ms / 16MB.

function solve(input) {

    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.0-9]*<(?<product>\w+)>[^|$%.0-9]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>\d+\.?\d*)\$/gm;

    let valid = pattern.exec(input);
    let total = 0;
    while (valid != null) {

        let customer = valid.groups['name'];
        let product = valid.groups['product'];
        let count = +valid.groups['count'];
        let price = +valid.groups['price'];

        total += count * price;
        console.log(`${customer}: ${product} - ${(count * price).toFixed(2)}`);

        valid = pattern.exec(input);
    }

    console.log(`Total income: ${total.toFixed(2)}`);
}
// solve(['%George%<Croissant>|2|10.3$',
//     '%Peter%<Gum>|1|1.3$',
//     '%Maria%<Cola>|1|2.4$',
//     'end of shift'])
solve(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']
)