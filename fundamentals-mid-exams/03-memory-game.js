// Memory game
// Write a program that recreates the Memory game.
// On the first line, you will receive a sequence of elements. Each element in the sequence will have a twin. Until the player receives "end" from the console, you will receive strings with two integers separated by a space, representing the indexes of elements in the sequence.
// If the player tries to cheat and enters two equal indexes or indexes which are out of bounds of the sequence, you should add two matching elements at the middle of the sequence in the following format:
// "-{number of moves until now}a" 
// Then print this message on the console:
// "Invalid input! Adding additional elements to the board"
// Input
// On the first line, you will receive a sequence of elements.
// On the following lines, you will receive integers until the command "end".
// Output
// Every time the player hit two matching elements, you should remove them from the sequence and print on the console the following message:
// "Congrats! You have found matching elements - {element}!"
// If the player hit two different elements, you should print on the console the following message:
// "Try again!"
// If the player hit all matching elements before he receives "end" from the console, you should print on the console the following message: 
// "You have won in {number of moves until now} turns!"
// If the player receives "end" before he hits all matching elements, you should print on the console the following message:
// "Sorry you lose :(
// {the current sequence's state}"
// Constraints
// All elements in the sequence will always have a matching element.



function solve(input) {

    let sequence = input.shift().split(' ');
    let command = input.shift();
    let matched = 0;
    while (command !== 'end' && sequence.length !== 0) {
        let tokens = command.split(' ');
        let num1 = +tokens[0];
        let num2 = +tokens[1];

        if (num1 < 0 || num1 > sequence.length || num2 < 0 || num2 > input.length) {
            console.log("Invalid input! Adding additional elements to the board");
            let index = Math.ceil(sequence.length / 2);
            sequence.splice(index, 0, '-2a', '-2a');
            command = input.shift();
            continue;
        }
        if (num1 == num2) {
            console.log("-{number of moves until now}a");
            console.log("Invalid input! Adding additional elements to the board");
            let index = Math.ceil(sequence.length / 2);
            sequence.splice(index, 2, num1, num2);
        }
        if (sequence[num1] !== sequence[num2]) {
            console.log('Try again!');
            command = input.shift();
            continue;
        }
        matched++;
        let element = sequence[num1];
        console.log(`Congrats! You have found matching elements - ${sequence[num1]}!`);
        sequence.splice(num1, 1); // когато изтрия единия индекс масива се намаля и се променят индексите
        let indexOfElement = sequence.indexOf(element)
        sequence.splice(indexOfElement, 1); // solution?
        command = input.shift();
    }

    sequence.length > 0 ? console.log(`Sorry you lose :(\n${sequence.join(' ')}`) : console.log(`You have won in ${matched} turns!`);





}

// solve([
//     "1 1 2 2 3 3 4 4 5 5",
//     "1 0",
//     "-1 0",
//     "1 0",
//     "1 0",
//     "1 0",
//     "end"
// ])

solve([
    "a 2 4 a 2 4", 
    "0 3", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ])

    // solve([
    //     "a 2 4 a 2 4", 
    //     "4 0", 
    //     "0 2",
    //     "0 1",
    //     "0 1", 
    //     "end"
    //     ])