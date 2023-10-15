function store(arr) {

    let customer = arr.pop();
    let total = 0;


    for (let price of arr) {

        if (arr.length <= 1) {
            console.log('Invalid order!');
            break;
            
        }
        else if (Number(price) < 0) {
            console.log('Invalid price!');
        } else if (Number(price) > 1) {
            total += Number(price);
        } else if (Number(price) == 0) {
            console.log('Invalid order!');
            break;
        }
        else {
            console.log("Congratulations you've just bought a new computer!");
            console.log(`Price without taxes: ${total.toFixed(2)}$`);
            let result = Math.max(total * 1.20)
            console.log(`Taxes: ${((result - total).toFixed(2))}$`);
            console.log('-----------');
            if (customer == 'special') {
                total *= 0.90;
                total = Math.max(total * 1.20)
                console.log(`Total price: ${total.toFixed(2)}$`);
            } else {
                total = Math.max(total * 1.20)
                console.log(`Total price: ${total.toFixed(2)}$`);

            }
        }
    }
}
store(['special'])