// Convert to Object
// Write a function that receives a string in JSON format and converts it to an object.
// Loop through all the keys and print them with their values in format: "{key}: {value}"

// function convertToObject(string) {

//     let personData = JSON.parse(string);

//     for (let key of Object.keys(personData)) {

//         console.log(`${key}: ${personData[key]}`);
//     }
// }

function convertToObject(string) {

    let personData = JSON.parse(string);

    for (let entry of Object.entries(personData)) {

        console.log(entry.join(': '));
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')