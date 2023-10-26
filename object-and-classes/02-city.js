function printCity(obj) {

    for (let entry of Object.entries(obj)) {
        console.log(entry.join(' -> '));
    }

}

// function printCity(cityData) {

//     Object.getOwnPropertyNames(cityData).forEach((val, idx, array) => {
//         console.log(`${val} -> ${cityData[val]}`);
//       });
// }

// function printCity(cityData) {

//     let keys = Object.keys(cityData)

//     for ( const key of keys) {
//         console.log(`${key} -> ${cityData[key]}`);
//     }
// }


printCity({
    name: "Sofia",
    area: 492, population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)