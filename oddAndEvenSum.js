// You will receive a single number. You have to write a function, that returns the sum of all even and all odd digits from that number. 


function sum(num) {
    let sumOdd = 0;
    let sumEven = 0;
    let strForLength = num + '';

    for (let i = 0; i < strForLength.length; i++) {

        let numForSum = Number(strForLength[i]);

        if (numForSum % 2 !== 0) {
            sumOdd += numForSum;
        } else {
            sumEven += numForSum;
   
        }
    }
  console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}

sum(1000435)