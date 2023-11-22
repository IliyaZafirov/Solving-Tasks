// Problem 3 - P!rates
// The problem for exam preparation for the Programming Fundamentals Course @SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/2302#2.

// Anno 1681. The Caribbean. The golden age of piracy. You are a well-known pirate captain by the name of Jack Daniels. Together with your comrades Jim (Beam) and Johnny (Walker), you have been roaming the seas, looking for gold and treasure… and the occasional killing, of course. Go ahead, target some wealthy settlements and show them the pirate's way!
// Until the "Sail" command is given, you will be receiving:
// You and your crew have targeted cities, with their population and gold, separated by "||".
// If you receive a city that has already been received, you have to increase the population and gold with the given values.
// After the "Sail" command, you will start receiving lines of text representing events until the "End" command is given. 
// Events will be in the following format:
// "Plunder=>{town}=>{people}=>{gold}"
// You have successfully attacked and plundered the town, killing the given number of people and stealing the respective amount of gold. 
// For every town you attack print this message: "{town} plundered! {gold} gold stolen, {people} citizens killed."
// If any of those two values (population or gold) reaches zero, the town is disbanded.
// You need to remove it from your collection of targeted cities and print the following message: "{town} has been wiped off the map!"
// There will be no case of receiving more people or gold than there is in the city.
// "Prosper=>{town}=>{gold}"
// There has been dramatic economic growth in the given city, increasing its treasury by the given amount of gold.
// The gold amount can be a negative number, so be careful. If a negative amount of gold is given, print: "Gold added cannot be a negative number!" and ignore the command.
// If the given gold is a valid amount, increase the town's gold reserves by the respective amount and print the following message: 
// "{gold added} gold added to the city treasury. {town} now has {total gold} gold."
// Input
// On the first lines, until the "Sail" command, you will be receiving strings representing the cities with their gold and population, separated by "||".
// On the following lines, until the "End" command, you will be receiving strings representing the actions described above, separated by "=>".
// Output
// After receiving the "End" command, if there are any existing settlements on your list of targets, you need to print all of them, in the following format:
// "Ahoy, Captain! There are {count} wealthy settlements to go to:
// {town1} -> Population: {people} citizens, Gold: {gold} kg
// {town2} -> Population: {people} citizens, Gold: {gold} kg
//    …
// {town…n} -> Population: {people} citizens, Gold: {gold} kg"
// If there are no settlements left to plunder, print:
// "Ahoy, Captain! All targets have been plundered and destroyed!"
// Constraints
// The initial population and gold of the settlements will be valid 32-bit integers, never negative, or exceed the respective limits.
// The town names in the events will always be valid towns that should be on your list.


function solve(input) {

    let command = input.shift();
    let obj = {};

    while (command !== 'Sail') {
        let [city, population, gold] = command.split('||')

        if (!obj.hasOwnProperty(city)) {
            obj[city] = { population: Number(population), gold: Number(gold) }

        } else {
            obj[city].population += Number(population);
            obj[city].gold += Number(gold);
        }

        command = input.shift();
    }
    command = input.shift();

    while (command !== 'End') {

        if (command.includes('Plunder')) {
            let [, town, killed, stealed] = command.split('=>');
            obj[town].population -= Number(killed);
            obj[town].gold -= Number(stealed);
            console.log(`${town} plundered! ${stealed} gold stolen, ${killed} citizens killed.`);
            if (obj[town].population == 0 || obj[town].gold == 0) {
                delete obj[town];
                console.log(`${town} has been wiped off the map!`);
            }
        } else if (command.includes('Prosper')) {
            let [, town, gold] = command.split('=>');
            if (gold >= 1) {
                obj[town].gold += Number(gold);
                console.log(`${gold} gold added to the city treasury. ${town} now has ${obj[town].gold} gold.`);

            } else {
                console.log("Gold added cannot be a negative number!");

            }
        }

        command = input.shift();
    }

    console.log(`Ahoy, Captain! There are ${Object.keys(obj).length} wealthy settlements to go to:`);
    for (let property in obj) {
        console.log(`${property} -> Population: ${obj[property].population} citizens, Gold: ${obj[property].gold} kg`);
    }
}
// solve(["Tortuga||345000||1250",
//     "Santo Domingo||240000||630",
//     "Havana||410000||1100",
//     "Sail",
//     "Plunder=>Tortuga=>75000=>380",
//     "Prosper=>Santo Domingo=>180",
//     "End"])
solve(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])