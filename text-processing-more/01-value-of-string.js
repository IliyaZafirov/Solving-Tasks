function solve(input) {

    let [string, command] = input;

    let sumUpper = 0;
    let sumLower = 0;

    let sum = 0;

    for (let el of string) {

        if (command == 'UPPERCASE') {

            if (/[A-Z]/.test(el)) {
                let code = el.charCodeAt(0);
                sum += code
            }
        } else if (command == 'LOWERCASE') {

            if (/[a-z]/.test(el)) {
                let code = el.charCodeAt(0);
                sum += code;
            }
        }
    }
    console.log(`The total sum is: ${sum}`);
}
solve(['HelloFromMyAwesomePROGRAM',
    'LOWERCASE'])