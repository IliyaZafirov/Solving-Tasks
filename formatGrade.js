// // . Format Grade
// // Write a function that receives a grade between 2.00 and 6.00 and prints a formatted line with grade and
// // description.
// Hints
// • Use a series of if statements checking the threshold between grade brackets

function formatGrade(grade) {
    if (grade < 3.00) {
        console.log(`Fail (${grade})`);
    } else if (grade < 3.5) {
        console.log(`Poor (${grade.toFixed(2)})`);
    } else if (grade < 4.50) {
        console.log(`Good (${grade.toFixed(2)})`);
    } else if (grade < 5.50) {
        console.log(`Very good (${grade.toFixed(2)})`);
    } else {
        console.log(`Excellent (${grade.toFixed(2)})`);
    }
}

formatGrade(3.33)