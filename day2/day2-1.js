import { createInputFileReadLineInterface } from "../utils.js";

const input = createInputFileReadLineInterface("./input2.txt");

let depth = 0
let positionX = 0

input.on("line", (newLineFromInput) => {
    const newMove = newLineFromInput.split(" ")[0]
    const newUnits = Number(newLineFromInput.split(" ").pop())
    if(newMove === 'forward') positionX += newUnits
    if(newMove === 'down') depth += newUnits
    if(newMove === 'up') depth -= newUnits
})

input.on("close", () => {
    console.log("positionX ", positionX)
    console.log("depth ", depth)
    console.log(positionX * depth)
})