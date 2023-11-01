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