function solve(arr) {
    let counterAdd = 0;
    let resultArr = [];
 for (let i = 0; i < arr.length;i++) {
     counterAdd++;
    if (arr[i] == 'add') {
        resultArr.push(counterAdd);
    }else if (arr[i] == 'remove') {

        resultArr.pop()
    }
}
if (resultArr.length == 0) {
    console.log('Empty');
} else {
console.log(resultArr.join(' '));
}
}