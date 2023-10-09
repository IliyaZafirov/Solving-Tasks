// Rotate Array
// Write a function that rotates an array. The array should be rotated to the right side, meaning that the last element
// should become the first, upon rotation.
// The input comes as an array of strings. The last element of the array is the amount of rotation you need to
// perform.
// The output is the resulting array after the rotations. The elements should be printed on one line, separated by a
// single space.
// Hints
// • Check if there is a built-in function for inserting elements at the start of the array.




function rotate(arr) {

    let rotate = arr.pop();

    for (let i = 0; i < rotate; i++) {

        let current = arr.pop();
        arr.unshift(current)

    }

    console.log(arr.join(' '));

}

// rotate(['1', '2', '3', '4', '2'])
rotate(['Banana', 'Orange', 'Coconut', 'Apple', '15'])