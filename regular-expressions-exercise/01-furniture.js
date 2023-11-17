// Furniture
// Write a function to calculate the total cost of different types of furniture. You will be given some lines of input until
// you receive the line "Purchase". For the line to be valid it should be in the following format:
// ">>{furniture name}<<{price}!{quantity}"
// The price can be a floating-point number or a whole number. Furniture items must start with a capital letter. Store
// the names of the furniture and the total price. At the end print each bought furniture on a separate line in the
// format:
// "Bought furniture:
// {1st name}
// {2nd name}
// …"
// And on the last line print, the following: "Total money spend: {spend money}" formatted to the second
// decimal point.
// If there are not valid furniture print only:
// Bought furniture:
// Total money spend: {spend money}

function solve(input) {

    let pattern = />>(?<name>[A-Za-z]+)<<(?<price>(\d+(\.\d+)?))!(?<qty>(\d+))\b/gm;

    let valid = pattern.exec(input);
    let bought = '';
    let total = 0;
    while (valid !== null) {

        let name = valid.groups['name'];
        let price = valid.groups['price'];
        let qty = valid.groups['qty'];

        bought += name+'\n';
        total += price * qty;
        valid = pattern.exec(input);
    }
    console.log(`Bought furniture:\n${bought}Total money spend: ${total.toFixed(2)}`);
}
// solve(['>>Sofa<<312.23!3',
//     '>>TV<<300!5',
//     '>Invalid<<!5',
//     'Purchase']
// )

solve(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']
)