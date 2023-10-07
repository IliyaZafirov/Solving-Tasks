// Characters in Range
// Write a function that receives two characters and prints on a single line all the characters in between them according to the ASCII code. Keep in mind that the second character code might be before the first one inside the ASCII table.


function range(a, b) {

    let start = a.charCodeAt(0);
    let end = b.charCodeAt(0);
    let result = '';
    let reversedLoop = false;

    if (start < end) {
        for (let i = start; start <= end; i++) {

            const char = String.fromCharCode(i);

            if (char == a) {

            } else if (char == b) {

            }
            else {
                result += char + " "
            }

            if (i == end) {
                break;
            }
        }
    } else if (start > end) {
        reversedLoop = true;
        for (let j = start; start > end; j--) {

            const char = String.fromCharCode(j);

            if (char == a) {

            } else if (char == b) {

            }
            else {
                result += char + " ";
            }

            if (j == end) {
                break;
            }
        }
    }

    if (!reversedLoop) {
        console.log(result);
    } else {

        let splittedResult = result.split(' ');
        for(let i = 0; i < splittedResult.length; i++) {
            if (splittedResult[i] == ' ') {
                
            }
        }
        let reverseSplitResult = splittedResult.reverse();
        console.log(reverseSplitResult.join(' '));
    }
}

range('C', '#')