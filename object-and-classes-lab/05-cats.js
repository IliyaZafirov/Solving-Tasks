// Cats
// Write a function that receives array of strings in the following format '{cat name} {age}'.
// Create a Cat class that receives in the constructor the name and the age parsed from the input.
// It should also have a method named "meow" that will print "{cat name}, age {age} says Meow" on the
// console.
// For each of the strings provided, you must create a cat object and invoke the .meow () method.



function cats(arr) {

    for (let elem of arr) {
        let tokens = elem.split(' ')
        let name = tokens[0];
        let yearsOld = tokens[1];

        class Cat {
            constructor(catName, age) {

                this.catName = name;
                this.age = yearsOld;

            }

            meow() {
                console.log(`${this.catName}, age ${this.age} says Meow`);
            }
        }

        let catInfo = new Cat(name, yearsOld);

        catInfo.meow();
    }
}

cats(['Mellow 2', 'Tom 5'])