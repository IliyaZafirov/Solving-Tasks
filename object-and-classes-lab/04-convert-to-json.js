// Convert to JSON
// Write a function that receives a first name, last name, hair color and sets them to an object.
// Convert the object to JSON string and print it.
// Input is provided as 3 single strings in the order stated above.


function convertToJSON(first, last, hair) {

    let person = {
        name: first,
        lastName: last,
        hairColor: hair
    }

    let fromObjToJSON = JSON.stringify(person);
    console.log(fromObjToJSON);
}

convertToJSON('George', 'Jones',
'Brown')