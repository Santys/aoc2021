import { createInputFileReadLineInterface } from "../utils.js";

const input = createInputFileReadLineInterface("./input.txt");

const arrayOfReports = [];

const calculateLifeSupport = (oxygen, dioxide) => {
  return parseInt(oxygen, 2) * parseInt(dioxide, 2);
};

const calculateOxigenMostCommonBitInPosition = (array, position) => {
  const mostCommonBit = [0, 0];
  for (let index = 0; index < array.length; index++) {
    if (array[index][position] === "0") {
      mostCommonBit[0] += 1;
    } else if (array[index][position] === "1") {
      mostCommonBit[1] += 1;
    }
  }
  if (mostCommonBit[0] > mostCommonBit[1]) return "0";
  return "1";
};

const calculateDioxideMostCommonBitInPosition = (array, position) => {
  const mostCommonBit = [0, 0];
  for (let index = 0; index < array.length; index++) {
    if (array[index][position] === "0") {
      mostCommonBit[0] += 1;
    } else if (array[index][position] === "1") {
      mostCommonBit[1] += 1;
    }
  }
  if (mostCommonBit[0] > mostCommonBit[1]) return "1";
  return "0";
};

const calculateOxygenRating = (array, position) => {
  if (array.length === 1) return array;
  const mostCommon = calculateOxigenMostCommonBitInPosition(array, position);
  const newArray = array.filter((report) => {
    return report[position] === mostCommon;
  });
  return calculateOxygenRating(newArray, position + 1);
};

const calculateDioxideRating = (array, position) => {
  if (array.length === 1) return array;
  const mostCommon = calculateDioxideMostCommonBitInPosition(array, position);
  const newArray = array.filter((report) => {
    return report[position] === mostCommon;
  });
  return calculateDioxideRating(newArray, position + 1);
};

input.on("line", (newLineFromInput) => {
  arrayOfReports.push(newLineFromInput);
});

input.on("close", () => {
  const oxygen = calculateOxygenRating(arrayOfReports, 0);
  const dioxide = calculateDioxideRating(arrayOfReports, 0);
  const lifeSupport = calculateLifeSupport(oxygen, dioxide);
  console.log("oxygen ", oxygen);
  console.log("dioxide ", dioxide);
  console.log("life support ", lifeSupport);
});
