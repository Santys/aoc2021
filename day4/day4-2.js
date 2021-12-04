import { createInputFileReadLineInterface } from "../utils.js";

const input = createInputFileReadLineInterface("./input.txt");

let drawNumbers = [];
let boards = [];
let boardNumber = -1;
let boardRow = -1;
let winnerBoards = [];
let winnerNumbers = [];

const getRow = (board, row) => {
  return boards[board][row];
};

const getColumn = (board, column) => {
  const selectedColumn = [];
  for (const index in boards[board]) {
    const row = boards[board][index];
    selectedColumn.push(row[column]);
  }
  return selectedColumn;
};

const bingoGame = () => {
  for (let currentNumber = 5; currentNumber < drawNumbers.length; currentNumber++) {
    const actualNumbers = drawNumbers.slice(0, currentNumber);
    for (let indexBoard = 0; indexBoard < boards.length; indexBoard++) {
      for (let indexRow = 0; indexRow < boards[indexBoard].length; indexRow++) {
        const row = getRow(indexBoard, indexRow);
        const column = getColumn(indexBoard, indexRow);
        const winRow = row.every((numbers) => actualNumbers.includes(numbers));
        const winColumn = column.every((numbers) =>
          actualNumbers.includes(numbers)
        );

        if (winRow || winColumn) {
          if (!winnerBoards.includes(indexBoard)) {
            winnerBoards.push(indexBoard);
            winnerNumbers.push(actualNumbers);
          }
          break;
        }
      }
    }
  }
  const lasWinnerBoard = boards[parseInt(winnerBoards.slice(-1))];
  const lastWinnerNumbers = winnerNumbers[winnerNumbers.length - 1];
  return result(lasWinnerBoard, lastWinnerNumbers);
};

const result = (board, actualNumbers) => {
  const lastNumber = parseInt(actualNumbers.slice(-1));
  let sumNotSelectedNumbers = 0;
  for (let indexRow = 0; indexRow < board.length; indexRow++) {
    const notSelected = board[indexRow].filter((number) => {
      return !actualNumbers.includes(number);
    });
    const sum = notSelected.reduce(
      (acc, current) => acc + parseInt(current),
      0
    );
    sumNotSelectedNumbers += sum;
  }
  return sumNotSelectedNumbers * lastNumber;
};

input.on("line", (newLineFromInput) => {
  if (drawNumbers.length === 0) {
    drawNumbers = newLineFromInput.split(",");
    return;
  }
  if (newLineFromInput === "") {
    boardNumber += 1;
    boardRow = -1;
    boards[boardNumber] = [];
    return;
  }
  boardRow += 1;
  const row = newLineFromInput.split(" ").filter((number) => number);
  boards[boardNumber].push(row);
});

input.on("close", () => {
  console.log(bingoGame());
});
