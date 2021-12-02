data = require("./input.json")

const sonarSweepWindow = (measures) => {
    let counter = 0;
    let previousWindow = sumMeasures(measures.slice(0,3))
    for (let index = 0; index < (measures.length - 2); index++) {
        const currentWindow = sumMeasures(measures.slice(index,index+3))
        if(currentWindow > previousWindow) counter++
        previousWindow = currentWindow
    }
    return counter
}

const sumMeasures = (measuresToSum) => {
    return measuresToSum.reduce((acc, crrt) => acc + crrt)
}

console.log(sonarSweepWindow(data))