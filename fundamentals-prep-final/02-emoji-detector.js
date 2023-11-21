// Problem 2 - Emoji Detector
// The problem for exam preparation for the Programming Fundamentals Course @SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/2302#1.

// Your task is to write a program that extracts emojis from a text and find the threshold based on the input.
// You have to get your cool threshold. It is obtained by multiplying all the digits found in the input.  The cool threshold could be a huge number, so be mindful.
// An emoji is valid when:
// It is surrounded by 2 characters, either "::" or "**"
// It is at least 3 characters long (without the surrounding symbols)
// It starts with a capital letter
// Continues with lowercase letters only
// Examples of valid emojis: ::Joy::, **Banana**, ::Wink::
// Examples of invalid emojis: ::Joy**, ::fox:es:, **Monk3ys**, :Snak::Es::
// You need to count all valid emojis in the text and calculate their coolness. The coolness of the emoji is determined by summing all the ASCII values of all letters in the emoji. 
// Examples: ::Joy:: - 306, **Banana** - 577, ::Wink:: - 409
// You need to print the result of the cool threshold and, after that take all emojis out of the text, count them and print only the cool ones on the console.
// Input
// On the single input, you will receive a piece of string. 
// Output
// On the first line of the output, print the obtained Cool threshold in the format:
// "Cool threshold: {coolThresholdSum}"
// On the following line, print the count of all emojis found in the text in the format:
// "{countOfAllEmojis} emojis found in the text. The cool ones are:
// {cool emoji 1}
// {cool emoji 2}
// …
// {cool emoji N}"
// Constraints
// There will always be at least one digit in the text!

function solve([input]) {

    let patternEmoji = /(?<sep>:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})\1/g
    let patternDigits = /(?<digit>\d{1,})/g;

    let valid = patternEmoji.exec(input);
    let validNums = patternDigits.exec(input);
    let threshold = '';

    let obj = {};
    let count = 0;

    while (validNums) {
        let num = validNums.groups['digit'];
        threshold += num;

        validNums = patternDigits.exec(input);
    }
    threshold = threshold.split('').map(Number).reduce((acc, val) => acc * val);

    while (valid) {
        let sep = valid.groups['sep'];
        let emoji = valid.groups['emoji'];
        let coolness = 0;

        for (let char of emoji) {
            let code = char.charCodeAt(0);
            coolness += code;
        }
        if (coolness > threshold) {
            obj[sep + emoji + sep] = coolness;

        }
        count++;
        valid = patternEmoji.exec(input);
    }

    console.log(`Cool threshold: ${threshold}`);
    console.log(`${count} emojis found in the text. The cool ones are:\n${Object.keys(obj).join('\n ')}`);

}
// solve(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])
// solve(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])
solve(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])