// Replace Repeating Chars
// Write a function that receives a single string and replace any sequence of the same letters with a single
// corresponding letter.

function solve(str) {

    let noRepeatStr = '';
    let prevChar = '';

    for (let curChar of str) {
        if (curChar != prevChar) {
            prevChar = curChar;
            noRepeatStr += curChar;
        }
    }
    console.log(noRepeatStr);

}
solve('aaaaabbbbbcdddeeeedssaa')