// Address Book
// Write a function that stores information about a person’s name and his address. The input comes as an array of
// strings. Each string contains the name and the address separated by a colon. If you receive the same name twice
// just replace the address. In the end, print the full list, sorted alphabetically by the person’s name.


function solve(input) {
  let addressBook = {};

  for (let elem of input) {
      let [name, address] = elem.split(':');

      addressBook[name] = address;
  }

  let entries = Object.entries(addressBook)
  entries.sort((a, b) => a[0].localeCompare(b[0]));

  let sorted = Object.fromEntries(entries);

  for (let elem of Object.entries(sorted)) {
      console.log(elem.join(' -> '));
  }

}

solve(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'])




  



    

    // function solve(input) {
    //     let addressBook = {};
    
    //     for (let elem of input) {
    //         let [name, address] = elem.split(':');
    
    //         addressBook[name] = address;
    //     }
    
    //     let entries = Object.entries(addressBook);
    //     entries.sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB));
        
    //   let sorted = {};

    //   for (let [name, address] of entries) {
    //     sorted[name] = address

    //   }
    //   console.log(sorted);

    //   for (let [name, address] of Object.entries(sorted)) {
    //     console.log(name, ' -> ', address);
    //   }
    // }
    
