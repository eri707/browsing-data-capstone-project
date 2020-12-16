// import fs module and read in the file
const fs = require('fs');
fs.readFile('./cars.json', (err, data) => {
    if (err) return console.log('Invalid data');
    let cars = JSON.parse(data);
    // assign argv from CLI
    let inPutMakeorType = process.argv[2];
    if (!inPutMakeorType) return console.log('Please input a make or type of a car')
    let inputMakeandType = process.argv[3]
    // shows a make or model or type of a car 
    cars.forEach(element => {
        // print model and type of a car  if a user input only a make of car
        if (element.make.toUpperCase() == inPutMakeorType.toUpperCase() && !inputMakeandType) {
            console.log(`model: ${element.model}, type: ${element.type}`)
        // print make and model of a car if a user input only a type of car
        } else if (element.type.toUpperCase() == inPutMakeorType.toUpperCase()) {
            console.log(`make: ${element.make}, model: ${element.model}`)
        // print type of car if a user input both make and type of a car
        } else if(element.make.toUpperCase() == inPutMakeorType.toUpperCase() && element.type.toUpperCase() == inputMakeandType.toUppercase()) {
            console.log(`type: ${element.model}`)
        }
    })
})
