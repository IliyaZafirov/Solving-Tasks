// Movies
// Write a function that stores information about movies inside an array. The movie's object info must be name,
// director, and date. You can receive several types of input:
// • "addMovie {movie name}" – add the movie
// • "{movie name} directedBy {director}" – check if the movie exists and then add the director
// • "{movie name} onDate {date}" – check if the movie exists and then add the date
// At the end print all the movies that have all the info (if the movie has no director, name, or date, don’t print it) in
// JSON format.



function manageMovies(inputArr) {

    let moviesArray = [];

    for (let elem of inputArr) {
        if (elem.includes('addMovie')) {
            let movieName = elem.split('addMovie ')[1];

            let movieObj = { name: movieName };
            moviesArray.push(movieObj);

        } else if (elem.includes('directedBy')) {
            let [movieName, directorName] = elem.split(' directedBy ');

            let checkMovie = moviesArray.find(movieX => movieX.name == movieName)

            if (checkMovie) {
                checkMovie.director = directorName;
            }
        } else if (elem.includes('onDate')) {
            let [movieName, date] = elem.split(' onDate ');

            let checkMovie = moviesArray.find(movieX => movieX.name == movieName)

            if (checkMovie) {
                checkMovie.date = date;
            }
        }
    }
    
    for (let elem of moviesArray) {
        if (elem.name && elem.director && elem.date) {
        console.log(JSON.stringify(elem));
    }
    }


}

manageMovies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)