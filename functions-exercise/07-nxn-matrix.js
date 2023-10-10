// NxN Matrix
// Write a function that receives a single integer number n and prints nxn matrix with that number.


function nxnMatrix(n) {
    for (let rowNum = 1; rowNum <= n; rowNum++) {
        let curRow = `${n} `.repeat(n);
        console.log(curRow);
    }
}

nxnMatrix(3)