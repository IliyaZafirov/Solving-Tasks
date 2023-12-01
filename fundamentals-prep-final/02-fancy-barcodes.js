// Problem 2 - Fancy Barcodes
// The problem for exam preparation for the Programming Fundamentals Course @SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/2303#1.

// Your first task is to determine if the given sequence of characters is a valid barcode or not. 
// Each line must not contain anything else but a valid barcode. A barcode is valid when:
// It is surrounded by a "@" followed by one or more "#"
// It is at least 6 characters long (without the surrounding "@" or "#")
// It starts with a capital letter
// It contains only letters (lower and upper case) and digits
// It ends with a capital letter
// Examples of valid barcodes: @###Che46sE@##, @#FreshFisH@#, @###Brea0D@###, @##Che46sE@##
// Examples of invalid barcodes: ##InvaliDiteM##, @InvalidIteM@, @#Invalid_IteM@#
// Next, you have to determine the product group of the item from the barcode. The product group is obtained by concatenating all the digits found in the barcode. If there are no digits present in the barcode, the default product group is "00".
// Examples:  
// @#FreshFisH@# -> product group: 00
// @###Brea0D@### -> product group: 0
// @##Che4s6E@## -> product group: 46
// Input
// On the first line, you will be given an integer n – the count of barcodes that you will be receiving next. 
// On the following n lines, you will receive different strings.
// Output
// For each barcode that you process, you need to print a message.
// If the barcode is invalid:
// "Invalid barcode"
// If the barcode is valid:
// "Product group: {product group}"

function solve(input) {
    let n = Number(input.shift());

    for (let i = 0; i < n; i++) {

        let pattern = /@#+(?<barcode>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;

        let valid = pattern.exec(input[i])

        if (valid) {
            let barcode = valid.groups['barcode'];
            let productGroup = '';
            let digitCount = 0;

            for (let char of barcode) {
                if (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) {
                    digitCount++;
                    productGroup += char;

                }
            }
            if (digitCount == 0) {
                console.log('Product group: 00');

            } else {
                console.log(`Product group: ${productGroup}`);
            }
        } else {
            console.log('Invalid barcode');
        }
    }
}
// solve(["3",
// "@#FreshFisH@#",
// "@###Brea0D@###",
// "@##Che4s6E@##"])
solve(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])