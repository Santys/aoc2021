import { createInputFileReadLineInterface } from "../utils.js";

const input = createInputFileReadLineInterface("./input.txt");

let depth = 0
let positionX = 0
let aim = 0

input.on("line", (newLineFromInput) => {
    const newMove = newLineFromInput.split(" ")[0]
    const newUnits = Number(newLineFromInput.split(" ").pop())
    if(newMove === 'forward'){
        positionX += newUnits
        depth += aim*newUnits
    } else  if (newMove === 'down') {
        aim += newUnits
    } else if (newMove === 'up') {
        aim -= newUnits
    }
})

input.on("close", () => {
    console.log("positionX ", positionX)
    console.log("depth ", depth)
    console.log(positionX * depth)
})