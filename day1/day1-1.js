data = require("./input.json")

const sonarSweep = (measures) => {
    let counter = 0;
    let previousElement = measures[0]
    measures.forEach(element => {
        if(element > previousElement) counter++
        previousElement = element
    });
    return counter
}

console.log(sonarSweep(data))