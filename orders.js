function order(product, quantity) {

    let obj = {
        "coffee": x => x * 1.50,
        "water": x => x * 1.00,
        "coke": x => x * 1.40,
        "snacks": x => x * 2.00
    }

    console.log(obj[product](quantity).toFixed(2));

}

order('water', 5)