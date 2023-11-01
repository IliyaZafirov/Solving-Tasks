// Meetings
// Write a function that manages meeting appointments. The input comes as an array of strings. Each string contains a
// weekday and person’s name. For each successful meeting, print a message. If you receive the same weekday twice,
// the meeting cannot be scheduled so print a conflicting message. In the end, print a list of all successful meetings.

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