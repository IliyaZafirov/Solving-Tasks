// Characters in Range
// Write a function that receives two characters and prints on a single line all the characters in between them according to the ASCII code. Keep in mind that the second character code might be before the first one inside the ASCII table.


// Needs Improving
function charactersInRange(char1, char2) {

    let code1 = char1.charCodeAt(0);
    let code2 = char2.charCodeAt(0);

    let minCode = Math.min(code1, code2);
    let maxCode = Math.max(code1, code2);

    let result = '';

    for (let curCode = minCode + 1; curCode < maxCode; curCode++) {
        let curChar = String.fromCharCode(curCode);
        result += curChar + ' ';
    }

    console.log(result);
}

charactersInRange('C', '#')