function solve(input) {

    let list = [];

    while (input[0] != 'PARTY') {
        list.push(input.shift());
    }

    input.shift();

    for (let name of input) {
        let index = list.indexOf(name);

        if (index != -1) {
            list.splice(index, 1);
        }
    }

    let vips = [];
    let regulars = [];

    for (let name of list) {
        if (name.charCodeAt(0) >= 48 && name.charCodeAt(0) <= 57) {
            vips.push(name);
        } else {
            regulars.push(name);
        }
    }

    console.log(list.length);
    if (vips.length > 0) {
        console.log(vips.join('\n'));
    }
    if (regulars.length > 0) {

        console.log(regulars.join('\n'));
    }

}
solve([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])