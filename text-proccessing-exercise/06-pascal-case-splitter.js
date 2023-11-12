function solve(input) {

    let result = input.split(/(?=[A-Z])/)

    console.log(result.join(', '));
}
// solve('SplitMeIfYouCanHaHaYouCantOrYouCan')
solve('HoldTheDoor')