function solve(input) {

    let army = [];

    for (let elem of input) {

        if (elem.includes('arrives')) {
            let [leader] = elem.split(' arrives');
            army.push(leader);

        } else if (elem.includes(':')) {
            let groupLeader = elem.split(':')
            let [armyName, armyCount] = elem.split(', ');
            army.push(groupLeader)

        }
        // console.log(elem);
    }

    console.log(army);
}
solve([
    'Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205']
)