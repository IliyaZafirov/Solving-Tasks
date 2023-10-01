// Write a function that collects each element of an array, on a given step.
// The input comes as an array of strings. The last element is N - the step.
// The collections are every element on the N-th step starting from the first one. If the step is "3", you need to print
// the 1-st, the 4-th, the 7-th … and so on, until you reach the end of the array. Then, print elements in a row,
// separated by a single space.



function print(arr) {

    let lastNum = arr.pop();
    let resultArr = [];
    for (let index in arr) {
        if (index % lastNum === 0) {
            resultArr.push(arr[index]);
        }
    }
    console.log(resultArr.join(' '));
}


print(['5', '20', '31', '4', '20', '2'])