// import fs module and read in the file
const fs = require('fs');
fs.readFile('./cars.json', (err, data) => {
    if (err) return console.log('Invalid data');
    let cars = JSON.parse(data);
    // assign argvs from CLI
    let arg1 = process.argv[2];
    if (!arg1) return console.log('Please input a make or type of a car')
    let arg2 = process.argv[3]
    // filter user inputs
    let carList = cars.filter(car => {
             // return car if make matches but type doesn't exist
        return (car.make.toUpperCase() == arg1.toUpperCase()) && !arg2 ||
            // return car if make and type match
            (car.make.toUpperCase() == arg1.toUpperCase()) && (car.type.toUpperCase() == arg2.toUpperCase()) ||
            // return car if type matches
            (car.type.toUpperCase() == arg1.toUpperCase());
    });
    // print car model 
    carList.forEach(car => {
        console.log(`${car.model}`);
    })
})
