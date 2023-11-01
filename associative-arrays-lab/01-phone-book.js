// Phone Book
// Write a function that stores information about a person’s name and phone number. The input is an array of strings
// with space-separated name and number. Replace duplicate names. Print the result as shown.


function solve(input) {

    let phoneBook = {};

    for (let elem of input) {
        let [name, phone] = elem.split(' ');

        phoneBook[name] = phone;


    }

    for (let entry of Object.entries(phoneBook))
        console.log(entry.join(' -> '));
}

solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
)