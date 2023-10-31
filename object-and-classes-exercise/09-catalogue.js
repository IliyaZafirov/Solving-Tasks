function orderedCatalogue(arr) {

    let catalogue = [];

    for (let elem of arr) {
        let [productName, productPrice] = elem.split(' : ');

        let obj = {
            name: productName,
            price: productPrice
        };

        catalogue.push(obj)
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