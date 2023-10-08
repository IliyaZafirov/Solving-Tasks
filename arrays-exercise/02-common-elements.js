// Common Elements
// Write a function, which prints common elements in two string arrays. Print all matches on separate lines. Compare
// the first array with the second array.




function common(arr1, arr2) {

    for (let elsArr1 of arr1) {

        for (let elsArr2 of arr2) {

            if (elsArr1 === elsArr2) {
                console.log(elsArr1);
            }
        }
    }

}

common(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2'])