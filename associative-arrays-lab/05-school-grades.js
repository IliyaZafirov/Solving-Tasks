// School Grades
// Write a function that stores students and their grades throughout the year. If a student appears more than once,
// add the new grades to existing ones. Finally, print the students and their average grades, sorted alphabetically by
// student name. The input comes as an array of strings.
// Note: The average grades must be fixed to the second decimal place.


function solve(input) {

    let obj = {};

    for (let elem of input) {
        let tokens = elem.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(Number);

        if (name in obj) {
            obj[name].push(...grades);
            continue;
        }
        obj[name] = grades
    }

    let entries = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, grades] of entries) {
        let sum = grades.reduce((a, b) => a + b) / grades.length;
        console.log(`${name}: ${sum.toFixed(2)}`);

    }

}
// solve([
//     'Lilly 4 6 6 5',
//     'Tim 5 6',
//     'Tammy 2 4 3',
//     'Tim 6 6']
// )

solve(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3']
)