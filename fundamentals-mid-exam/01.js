function solve(input) {

    let productionByWorker = +input.shift();
    let workers = +input.shift();
    let productionFor30Days = +input.shift();


    let production = 0;
    let difference = 0;

    for (let days = 1; days <= 30; days++) {

        let dayProduction = productionByWorker * workers;
        if (days % 3 == 0) {
            dayProduction *= 0.75;
        }
        production += Math.floor(dayProduction);
    }
    let negative = false;
    if (production < productionFor30Days) {
        negative = true;
        difference = productionFor30Days - production;
    } else {
        difference = production - productionFor30Days;
    }
    console.log(`You have produced ${production} biscuits for the past month.`);

    let neededBiscuits = difference / productionFor30Days * 100;

    negative == true ? console.log(`You produce ${neededBiscuits.toFixed(2)} percent less biscuits.`) : console.log(`You produce ${neededBiscuits.toFixed(2)} percent more biscuits.`);


}

solve(['78', '8', '16000'])
// solve(['65', '12', '26000'])
// solve(['163', '16', '67020'])
