


function solve(inputArr) {


  let result = inputArr.filter((el, index) => el >= Math.max(...inputArr.slice(0, index))).join(' ');

  console.log(result);
}


solve([1, 3, 8, 4, 10, 12, 3, 2, 24])