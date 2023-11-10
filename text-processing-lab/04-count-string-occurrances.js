function solve(input, word) {

    let splitted = input.split(' ');
    let counter = 0;
    for (let elem of splitted) {
        if (elem == word) {
            counter++;
        }
    }
    console.log(counter);


}
solve('This is a word and it also is a sentence',
    'is'
)