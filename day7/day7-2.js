import { createInputFileReadLineInterface } from "../utils.js";

const input = createInputFileReadLineInterface("./input.txt");

let crabInicialPositions = [];

const calculateAverage = (input) => {
  const sum = input.reduce((acc, current) => {
    return acc + current;
  }, 0);
  return Math.trunc(sum / input.length);
};

const calculateFuel = (initialPositions) => {
  const alignedPosition = calculateAverage(initialPositions);
  let fuelConsumed = 0;
  initialPositions.forEach((initialPosition) => {
    const totalMovement = Math.abs(initialPosition - alignedPosition);
    fuelConsumed += (totalMovement * (totalMovement + 1)) / 2;
  });
  return fuelConsumed;
};

input.on("line", (newLineFromInput) => {
  newLineFromInput
    .split(",")
    .map((position) => crabInicialPositions.push(Number(position)));
});

input.on("close", () => {
  console.log(calculateFuel(crabInicialPositions));
});
