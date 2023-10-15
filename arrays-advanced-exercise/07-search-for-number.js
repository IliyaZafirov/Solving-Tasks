// Search for a Number
// You will receive two arrays of integers. The second array is containing exactly three numbers.
// The first number represents the number of elements you have to take from the first array (starting from the first
// one).
// The second number represents the number of elements you have to delete from the numbers you took (starting
// from the first one).
// The third number is the number we search in our collection after the manipulations.
// As output print how many times that number occurs in our array in the following format:
// "Number {number} occurs {count} times."




function solve(inputArr, neededThreeNumbers) {

    let numOfElsToTake = neededThreeNumbers[0];
    let numsForDelete = neededThreeNumbers[1];
    let searchedNum = neededThreeNumbers[2];

    let newArr = [];
    let counter = 0;

    for (let i = 0; i < numOfElsToTake; i++) {
        newArr.push(inputArr[i])
        // console.log(newArr);
    }

    for (let i = 0; i < numsForDelete; i++) {
        newArr.shift()
        //  console.log(newArr);
    }

for (let els of newArr) {
    // console.log(els);
    if (els == searchedNum) {
        counter++;
    }
}
    
    console.log(`Number ${searchedNum} occurs ${counter} times.`);
}
solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
)