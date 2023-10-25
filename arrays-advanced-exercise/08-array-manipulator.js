function solve(numbersArray, action) {

    while (action.length !== 0) {

        let tokens = action.shift().split(' ');
        let command = tokens[0];

        if (command == 'add') {
            let index = +tokens[1];
            let element = +tokens[2];
            numbersArray.splice(index, 0, element);
        } else if (command == 'addMany') {
            let index = +tokens[1];
            let element = +tokens[2];
          
            for (let i = removeFirst.length - 1; i >= 2; i--) {
                currentEl = removeFirst[i];
                arr.splice(index, 0, +currentEl);
            }
        } else if (command == 'contains') {
            let element = +tokens[1];
            let index = numbersArray.indexOf(element);
            console.log(index);
        } else if (command == 'remove') {
            let index = +tokens[1];
            numbersArray.splice(index, 1);
        } else if (command == 'shift') {
            // numbersArray.shift().push().rotate();
            
        } else if (command == 'sumPairs') {
            // console.log(numbersArray.map((a,b) => a + b));
        } else if (command == 'print') {
            console.log(numbersArray);
            return;
        }

    }


}

solve([1, 2, 4, 5, 6, 7],

    ['add 1 8',
        'contains 1',
        'contains 3',
        'sumPairs',
        'print']
)