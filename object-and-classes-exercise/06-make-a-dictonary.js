function dictonary(arr) {

   let arrayForSortedKeys = []

    for (let elem of arr) {

        // console.log(elem.split('"'));
        let [nothing1, product, nothing2, desc] = elem.split('"')

        let obj = {
            items: product,
            description: desc
        }

        arrayForSortedKeys.push(obj);

    }

    arrayForSortedKeys.sort((firstItem, secondItem) => firstItem.items.localeCompare(secondItem.items))

    for (let elem of arrayForSortedKeys) {
        console.log(`Term: ${elem.items} => Definition: ${elem.description}`);
    }

}

dictonary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'])