function solve(input){
 
    let type = input.pop();

    for (let cmd of input) {
        console.log(cmd);
    }

    if(type === "special")
    {

    }

    console.log(`Congratulations you've just bought a new computer!`)
    // console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`) // toFixed(2) !!!
    // console.log(`Taxes: ${taxes.toFixed(2)}$`)
    console.log("-----------")
    // console.log(`Total price: ${totalPrice.toFixed(2)}$`)
 
}   
// solve(['1050', '200', '450', '2', '18.50', '16.86', 'special'])
// solve(['special'])
solve(['1023', '15', '-20', '-5.50', '450', '20', '17.66', '19.30', 'regular'])