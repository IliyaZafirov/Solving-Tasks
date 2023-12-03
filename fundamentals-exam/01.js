function stringManipulator(input) {

    let str = input.shift();

    for (let el of input) {
        if (el == 'End') break;

        if (el.includes('Translate')) {
            let [, char, replacement] = el.split(' ');
            str = str.split(char).join(replacement);
            console.log(str);

        } else if (el.includes('Includes')) {
            let [, substring] = el.split(' ');
            if (str.includes(substring)) {
                console.log('True');
            } else {
                console.log('False');
            }

        } else if (el.includes('Start')) {
            let [, substring] = el.split(' ');

            let count = 0;
            for (let i = 0; i < substring.length; i++) {
                if (str[i] == substring[i]) {
                    count++;
                }

            }

            if (count == substring.length) {
                console.log('True');
            } else {
                console.log('False');

            }

        } else if (el == 'Lowercase') {
            str = str.toLowerCase();
            console.log(str);

        } else if (el.includes('FindIndex')) {
            let [, char] = el.split(' ');
            for (let i = str.length; i > 0; i--) {
                if (str[i] == char) {
                    console.log(i);
                    break;
                }
            }

        } else if (el.includes('Remove')) {
            let [, startIdx, count] = el.split(' ');
            str = str.slice(0, +startIdx) + str.slice(+startIdx + +count);
            console.log(str);
        }
    }


}
// stringManipulator(["//Thi5 I5 MY 5trING!//",
//     "Translate 5 s",
//     "Includes string",
//     "Start //This",
//     "Lowercase",
//     "FindIndex i",
//     "Remove 0 10",
//     "End"]);
stringManipulator(["*S0ftUni is the B3St Plac3**",
"Translate 2 o",
"Includes best",
"Start the",
"Lowercase",
"FindIndex p",
"Remove 2 7",
"End"])