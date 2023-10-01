// 8. Condense Array to Number
// Write a program, which receives an array of numbers, and condenses them by summing adjacent couples of
// elements until a single number is obtained.
// © SoftUni – https://softuni.org. Copyrighted document. Unauthorized copy, reproduction or use is not permitted.

// Follow us: Page 6 of 6
// Examples
// For example, if we have 3 elements [2, 10, 3], we sum the first two and the second two elements and obtain
// {2+10, 10+3} = {12, 13}, then we sum again all adjacent elements and obtain {12+13} = {25}.


function condense(arr) {

    let condensed = [];
    if (arr.length === 1) {
        console.log(arr[0]);
        return
    }

    for (let i = 0; i < arr.length - 1; i++) {

        arr[i] = Number(arr[i]) + Number(arr[i + 1]);

    }
    arr.pop()
  condense(arr)
    
}


//condense([2, 10, 3])
condense([5, 0, 4, 1, 2])
//condense([1])