function solve(arr) {

    let processed = arr.filter((x, index) => index % 2 == 1).map(x => 2 * x).reverse()
   
    console.log(processed.join(' '));
}

solve([3, 0, 10, 4, 7, 3]);
solve([10, 15, 20, 25])