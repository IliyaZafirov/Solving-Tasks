// Company Users
// Write a function, which keeps the information about companies and their employees.
// You will receive an array of strings containing the company name and employee's id. Add each employee to the
// given company. Keep in mind that a company cannot have two employees with the same id.
// When you finish reading data, order the companies by their name in ascending order.
// Print the company name and each employee's id in the following format:
// {companyName}
// -- {id1}
// -- {id2}
// -- {idN}
// Input / Constraints
// • The input come as array of strings, each in the format: "{companyName} -> {employeeId}".
// • The input always will be valid.

function solve(arr) {

    let companies = {};

    for (let elem of arr) {
        let [companyName, employeeId] = elem.split(' -> ');

        if (companyName in companies) {
            if (!companies[companyName].includes(employeeId)) {
                companies[companyName].push(employeeId);
            }
            continue;
        }
        companies[companyName] = [employeeId];
    }

    let entries = Object.entries(companies).sort((a, b) => a[0].localeCompare(b[0]))

    for (let [name, employeeId] of entries) {
        console.log(name);
        employeeId.forEach(id => console.log(`-- ${id}`))
    }

}
// solve([
//     'SoftUni -> AA12345',
//     'SoftUni -> BB12345',
//     'Microsoft -> CC12345',
//     'HP -> BB12345'])

solve([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'])