// Tseam Account
// As a gamer, Peter has Tseam Account. He loves to buy new games. You are given Peter's account with all of his 
// games-> strings, separated by space. Until you receive "Play!" you will be receiving commands which Peter does 
// with his account.
// You may receive the following commands:
// • Install {game} - add the game at the last position in the account, but only if it isn't installed already.
// • Uninstall {game} - delete the game if it exists.
// • Update {game} - update the game if it exists and place it in the last position.
// • Expansion {game}-{expansion} - check if the game exists and insert after it the expansion in the 
// following format: "{game}:{expansion}";
// Input
// • On the first input line you will receive Peter`s account - a sequence of game names, separated by space.
// • Until you receive "Play!" you will be receiving commands. 
// Output
// • As output, you must print Peter`s Tseam account. 
// Constraints
// • The command will always be valid.
// • The game and expansion will be strings and will contain any character, except '-'.
// • Allowed working time / memory: 100ms / 16MB.


function solve(arr) {

    let account = arr.shift();
    let installed = account.split(' ');

    for (let els of arr) {
        
        let token = els.split(' ');
        let command = token[0];
        let game = token[1];

        if (command == 'Install') {
           
            let counter = 0;
 
            for (let i = 0; i < installed.length; i++) {
                if (installed[i] === game) {
                    counter++;
                    break;
                }
            }
 
            if (counter === 0) {
                installed.push(game);
            }
        } else if (command == 'Uninstall') {
            for (let i = 0; i < installed.length; i++) {
                if (installed[i] === game) {
                    installed.splice(i, 1);
                    break;
                }

            }

        } else if (command == 'Update') {
            for (let i = 0; i < installed.length; i++) {
                if (installed[i] === game) {
                    let updated = installed.splice(i, 1).toString();
                    installed.push(updated);
                    break;

                }
            }
        } else if (command == 'Expansion') {
            let token = game.split('-')
            let checkGame = token[0];
            let expansion = token[1];

            for (let i = 0; i < installed.length; i++) {
                if (installed[i] === checkGame) {
                    installed.splice(i + 1, 0, `${checkGame}:${expansion}`)
                    break;
                }
            }
        } else if (command == 'Play!') {
            console.log(installed.join(' '));
            break;
        }
    }
}

solve(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!'])
//solve(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!'])