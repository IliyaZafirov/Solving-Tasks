// Catalogue
// You have to create a sorted catalog of store products. You will be given the products’ names and prices. You
// need to order them in alphabetical order.
// The input comes as an array of strings. Each element holds info about a product in the following format:
// "{productName} : {productPrice}"
// The product’s name will be a string, which will always start with a capital letter, and the price will be a number.
// You can safely assume there will be NO duplicate product input. The comparison for alphabetical order is caseinsensitive.
// As output, you must print all the products in a specified format. They must be ordered exactly as specified above.
// The products must be divided into groups, by the initial of their name. The group's initial should be printed, and
// after that, the products should be printed with 2 spaces before their names. For more info check the examples.


function orderedCatalogue(array) {

    let catalogue = [];

    for (let i = 0; i < array.length; i++) {
        let elements = array[i].split(' : ');
        let product = {
            name: elements[0],
            price: elements[1]
        };
        catalogue.push(product)
    }

    catalogue.sort((a, b) => a.name.localeCompare(b.name));

    let currentLetter = '';
    for (let elem of catalogue) {
        if (elem.name.charAt(0) == currentLetter) {
            console.log(` ${elem.name}: ${elem.price}`);
            continue;
        }
        currentLetter = elem.name.charAt(0);
        console.log(currentLetter);
        console.log(` ${elem.name}: ${elem.price}`);
    }
}

orderedCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
)