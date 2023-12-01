// Problem 3 - Plant Discovery
// The problem for exam preparation for the Programming  HYPERLINK "https://softuni.bg/courses/programming-fundamentals-csharp-java-js-python"Fundamentals  HYPERLINK "https://softuni.bg/courses/programming-fundamentals-csharp-java-js-python"Course HYPERLINK "https://softuni.bg/courses/programming-fundamentals-csharp-java-js-python" @SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/2518#2.

// You have now returned from your world tour. On your way, you have discovered some new plants, and you want to gather some information about them and create an exhibition to see which plant is highest rated.
// On the first line, you will receive a number n. On the next n lines, you will be given some information about the plants that you have discovered in the format: "{plant}<->{rarity}". Store that information because you will need it later. If you receive a plant more than once, update its rarity.
// After that, until you receive the command "Exhibition", you will be given some of these commands:
// "Rate: {plant} - {rating}" – add the given rating to the plant (store all ratings)
// "Update: {plant} - {new_rarity}" – update the rarity of the plant with the new one
// "Reset: {plant}" – remove all the ratings of the given plant
// Note: If any given plant name is invalid, print "error"
// After the command "Exhibition", print the information that you have about the plants in the following format:
// "Plants for the exhibition:
// - {plant_name1}; Rarity: {rarity}; Rating: {average_rating}
// - {plant_name2}; Rarity: {rarity}; Rating: {average_rating}
// …
// - {plant_nameN}; Rarity: {rarity}; Rating: {average_rating}"
// The average rating should be formatted to the second decimal place.
// Input / Constraints
// You will receive the input as described above.
// JavaScript: you will receive a list of strings.
// Output
// Print the information about all plants as described above.


function solve(input) {

    let n = Number(input.shift());
    let obj = {};

    for (let i = 0; i < n; i++) {
        let [plant, rarity] = input[i].split('<->');
        obj[plant] = { rarity: Number(rarity), rating: [] }
    }

    for (let i = n; i < input.length; i++) {
        if (input[i] == 'Exhibition') break;

        if (input[i].includes('Rate:')) {
            let [, plant, , rating] = input[i].split(' ');
            if (obj.hasOwnProperty(plant)) {
                obj[plant].rating.push(Number(rating))

            } else {
                console.log('error');
            }

        } else if (input[i].includes('Update:')) {
            let [, plant, , newRarity] = input[i].split(' ');
            if (obj.hasOwnProperty(plant)) {
                obj[plant].rarity = Number(newRarity)

            } else {
                console.log('error');
            }

        } else if (input[i].includes('Reset:')) {
            let [, plant] = input[i].split(' ');
            if (obj.hasOwnProperty(plant)) {
                obj[plant].rating = []
            } else {
                console.log('error');
            }

        }

    }

    console.log('Plants for the exhibition:');
    for (let property in obj) {
        let averageRating = 0;
        if (obj[property].rating.length > 0) {
            averageRating = obj[property].rating.reduce((acc, val) => acc + val, 0) / obj[property].rating.length;
        }
        console.log(`- ${property}; Rarity: ${obj[property].rarity}; Rating: ${averageRating.toFixed(2)}`);
    }
}
solve(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
// solve(["2",
//     "Candelabra<->10",
//     "Oahu<->10",
//     "Rate: Oahu - 7",
//     "Rate: Candelabra - 6",
//     "Exhibition"])