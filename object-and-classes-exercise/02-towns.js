function towns(inputArr) {

    for (let elem of inputArr) {
        let tokens = elem.split(' | ');
        let lati = +tokens[1];
        let longi = +tokens[2]
  

        let obj = {
            town: tokens[0],
            latitude: lati.toFixed(2),
            longitude: longi.toFixed(2)
        }
        console.log(obj);
    }


}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)