// Smallest of Three Numbers
// Write a function that receives three integers and prints the smallest number. Use an appropriate name for the function.



function smallest(num1, num2, num3) {

    if (num1 < num2 && num1 < num3) {
        console.log(num1);
    } else if (num2 < num1 && num2 < num3) {
        console.log(num2);
    } else {
        console.log(num3);
    }
 

}

smallest(2, 5, 3)