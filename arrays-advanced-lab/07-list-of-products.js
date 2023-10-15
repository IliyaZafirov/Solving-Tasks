// List of Products
// You will receive an array of products. Print a numbered array of all the products ordered by name.

function solve(arr) {

    arr.sort();
    let counter = 0;

    for(let product of arr) {
        counter++;
        console.log(`${counter}.${product}`);
    }

}

solve(['Potatoes', 'Tomatoes', 'Onions','Apples'])