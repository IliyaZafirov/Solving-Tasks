// A Miner Task
// You are given an array of strings. Every odd string is representing a resource (e.g. Gold, Silver, Copper, and so on),
// and every even – quantity. Your task is to collect the resources and print them each on a new line.
// Print the resources and their quantities in the format:
// {resource} –> {quantity}
// The quantities inputs will be in the range [1 … 2 000 000 000].

function solve(arr) {

    let resourcesObj = {};

    for (let i = 0; i < arr.length; i += 2) {
        let resource = arr[i];
        let count = Number(arr[i + 1]);

        if (resource in resourcesObj) {
            resourcesObj[resource] += count;
        } else {
            resourcesObj[resource] = count;
        }
    }

    let entries = Object.entries(resourcesObj);

    for (let [resource, count] of entries) {
        console.log(`${resource} -> ${count}`);
    }


}
solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]
)