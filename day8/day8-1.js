import { createInputFileReadLineInterface } from "../utils.js";

const input = createInputFileReadLineInterface("./input.txt");

let solution = 0

input.on("line", (newLineFromInput) => {
  
  const [pattern, value] = newLineFromInput.split(" | ")
  const digits = value.split(" ")

  digits.forEach(digit => {
    if(digit.length === 2) solution++
    if(digit.length === 3) solution++
    if(digit.length === 4) solution++
    if(digit.length === 7) solution++
  })

});

input.on("close", () => {
  console.log(solution)
});
