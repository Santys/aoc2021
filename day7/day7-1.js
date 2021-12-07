import { createInputFileReadLineInterface } from "../utils.js";

const input = createInputFileReadLineInterface("./input.txt");

let crabInicialPositions = []

const calculateMedian = (input) => {
  input.sort((a,b) => a-b)
  const center = Math.floor(input.length / 2)

  if(input.length % 2) return input[center]
  
  return (input[center] + input[center - 1])/2
}

const calculateFuel = (initialPositions) => {
  const alignedPosition = calculateMedian(initialPositions)
  console.log(initialPositions)
  const fuelConsumed = initialPositions.reduce((fuel, currentPosition) => {
    return fuel + Math.abs(currentPosition - alignedPosition)
  }, 0)
  return fuelConsumed
}

input.on("line", (newLineFromInput) => {
  newLineFromInput.split(",").map((position) => crabInicialPositions.push(Number(position)));
});

input.on("close", () => {
  console.log(calculateFuel(crabInicialPositions))
});

