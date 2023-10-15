// Distinct Array
// You will be given an array of integer numbers on the first line of the input.
// Remove all repeating elements from the array.
// Print the result elements separated by a single space.


function solve(arr) {

    let uniqueNums = [];

    for (let num of arr) {

       if (!uniqueNums.includes(num)) {
            uniqueNums.push(num)
        }

}
    console.log(uniqueNums.join(' '));
}

solve([7, 8, 9, 7, 2, 3, 4, 1, 2])

