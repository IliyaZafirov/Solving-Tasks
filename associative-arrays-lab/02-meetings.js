function meetings(input) {

    let obj = {};

    for (let elem of input) {
        let [weekday, name] = elem.split(' ');

        if (!obj.hasOwnProperty(weekday)) {
            obj[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        } else {
            console.log(`Conflict on ${weekday}!`);
        }

    }

    for (let entries of Object.entries(obj)) {
        console.log(entries.join(' -> '));
    }

}

// meetings(['Monday Peter',
//     'Wednesday Bill',
//     'Monday Tim',
//     'Friday Tim']
// )

meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']
)