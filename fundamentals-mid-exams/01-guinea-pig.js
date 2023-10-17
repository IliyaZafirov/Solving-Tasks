// Guinea Pig
// Merry has a guinea pig named Puppy, that she loves very much. Every month she goes to the nearest pet store and buys him everything he needs – food, hay, and cover.
// On the first three lines, you will receive the quantity of food, hay, and cover, which Merry buys for a month (30 days). On the fourth line, you will receive the guinea pig's weight.
// Every day Puppy eats 300 gr of food. Every second day Merry first feeds the pet, then gives it a certain amount of hay equal to 5% of the rest of the food. On every third day, Merry puts Puppy cover with a quantity of 1/3 of its weight.
// Calculate whether the quantity of food, hay, and cover, will be enough for a month.
// If Merry runs out of food, hay, or cover, stop the program!
// Input
// On the first line – quantity food in kilograms - a floating-point number in the range [0.0 – 10000.0].
// On the second line – quantity hay in kilograms - a floating-point number in the range [0.0 – 10000.0].
// On the third line – quantity cover in kilograms - a floating-point number in the range [0.0 – 10000.0].
// On the fourth line – guinea's weight in kilograms - a floating-point number in the range [0.0 – 10000.0].
// Output
// If the food, the hay, and the cover are enough, print:
// "Everything is fine! Puppy is happy! Food: {excessFood}, Hay: {excessHay}, Cover: {excessCover}."
// If one of the things is not enough, print:
// "Merry must go to the pet store!"
// The output values must be formatted to the second decimal place!


function solve(input) {

    let [food, hay, cover, weight] = input;

    let foodInGr = food * 1000;
    let hayInGr = hay * 1000;
    let coverInGr = cover * 1000;
    let weighInGr = weight * 1000;
    let days = 1;

    while (days <= 30) {
        foodInGr -= 300;
        if (days % 2 == 0) {
            hayInGr -= (foodInGr * 5) / 100;
        } 
        if (days % 3 == 0) {
            coverInGr -= weighInGr * 0.3333;
        }
        days++;
    }

    let foodResult = foodInGr / 1000;
    let hayResult = hayInGr / 1000;
    let coverResult = coverInGr / 1000;

    if (foodResult >= 0 && hayResult >= 0 && coverResult >= 0) {
        console.log(`Everything is fine! Puppy is happy! Food: ${foodResult.toFixed(2)}, Hay: ${hayResult.toFixed(2)}, Cover: ${coverResult.toFixed(2)}.`)
    } else if (foodResult < 0 || hayResult < 0 || coverResult < 0) {
        console.log('Merry must go to the pet store!');
    }
}

solve((["10", 
"5", 
"5.2", 
"1"]))