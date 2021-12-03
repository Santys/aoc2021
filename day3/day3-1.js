import { createInputFileReadLineInterface } from "../utils.js";

const input = createInputFileReadLineInterface("./input.txt");

const mostCommonBit = new Array(12).fill(0).map(() => new Array(2).fill(0));
let gamma = "";
let epsilon = "";

const createBinaryWord = (array) => {
  console.log(array.length);
  for (let index = 0; index < array.length; index++) {
    const bits = array[index];
    if (bits[0] > bits[1]) {
      gamma += "0";
      epsilon += "1";
    } else if (bits[0] < bits[1]) {
      gamma += "1";
      epsilon += "0";
    }
  }
};

const calculatePowerConsumption = (gamma, epsilon) => {
    return parseInt(gamma,2) * parseInt(epsilon,2)
}

input.on("line", (newLineFromInput) => {
  for (let index = 0; index < newLineFromInput.length; index++) {
    if (newLineFromInput[index] === "0") {
      mostCommonBit[index][0] += 1;
    } else if (newLineFromInput[index] === "1") {
      mostCommonBit[index][1] += 1;
    }
  }
});

input.on("close", () => {
  createBinaryWord(mostCommonBit);
  console.log("gamma ", gamma);
  console.log("epsilon ", epsilon);
  console.log("power consumption", calculatePowerConsumption(gamma, epsilon))
});
