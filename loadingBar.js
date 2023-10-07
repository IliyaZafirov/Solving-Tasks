// Loading Bar
// You will receive a single number between 0 and 100, which is divided with 10 without residue (0, 10, 20, 30...). 
// Your task is to create a function that visualizes a loading bar depending on the number you have received in the input.


function loadingBar(num) {
    let index = 0;
    let counter = 0;
    let arr = ['.','.','.','.','.','.','.','.','.','.'];
    while (index < num) {
        counter++;
        arr.unshift('%')
        arr.pop()
        index += 10;
    }
    if (counter !== 10) {
    console.log(`${num}% [${arr.join('')}]`);
    console.log('Still loading...');
} else {
    console.log(`${num}% Complete!`);
    console.log(`[${arr.join('')}]`);
}
}

// function solve(n) {
//     if(n === 100) {
//         console.log("100% Complete!");
//         console.log("[%%%%%%%%%%]");
//     } else {
//         let output = '';
//         for(let i = 0; i < 10; i++) {
//             if(i < n / 10) {
//                 output += "%";
//             } else {
//                 output += "."
//             }
//         }
//         console.log(`${n}% [${output}]`);
//         console.log("Still loading...");
//     }
// }
loadingBar(100)