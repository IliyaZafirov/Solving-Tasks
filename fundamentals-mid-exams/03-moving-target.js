function movingTarget(inputArr) {

    let targets = inputArr.shift().split(' ').map(Number);

    for (let i = 0; i < inputArr.length; i++) {

        let [command, index, el] = inputArr[i].split(' ');

        if (command == 'Shoot') {
          if ( index + el <= targets.length - 1 && index - el >= 0) {
                    targets[index] -= el;
                    if(targets[index] < 0) {
                        targets.splice(index - el, el * 2 + 1)
                    } 
          }
        } else if (command == 'Strike') {
                targets.splice(index - el, el + 1 )
                //  targets.splice(-el, -index)
        } else if (command == 'Add') {

        }
    }
    console.log(targets);
}

movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"])