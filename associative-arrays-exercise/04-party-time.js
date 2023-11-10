// Party Time
// There is a party at SoftUni. Many guests are invited and they are two types: VIP and regular. When guests come to
// the party check if he/she contains in any of the two reservation lists.
// The input will come as an array of strings. You will be given the list with the guests before you receive a command
// "PARTY".
// All VIP numbers start with a digit.
// When you receive the command "PARTY", the guests start coming.
// Print the count of guests then all guests, who didn't come to the party (VIP must be printed first).
// Hint: Guest names are not unique. Only the first match is removed when receiving a name.

function solve(input) {

    let list = [];

    while (input[0] != 'PARTY') {
        list.push(input.shift());

    }
    input.shift();

    for (let elem of input) {
        let index = list.indexOf(elem);

        if (index != -1) {
            list.splice(index, 1)
        }
    }

    let vip = [];
    let regular = [];

    for (let name of list) {
        if (name.charCodeAt(0) >= 48 && name.charCodeAt(0) <= 57) {
            vip.push(name);
        } else {
            regular.push(name);
        }
    }

    console.log(list.length);

    vip.forEach(el => console.log(el));
    regular.forEach(el => console.log(el));
}
solve([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])