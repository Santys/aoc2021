import { createInputFileReadLineInterface } from "../utils.js";

const input = createInputFileReadLineInterface("./input.txt");

let lowestPoints = []
let heightmap = []

input.on("line", (newLineFromInput) => {
  
  heightmap.push(newLineFromInput.split(""))
  
});

input.on("close", () => {
  calculateLowPoints(heightmap)
  
  console.log("Solution ========> " , calculateSolution(lowestPoints))
});

const calculateLowPoints = (heightmap) => {
  for (let i = 0; i < heightmap.length; i++) {
    for (let j = 0; j < heightmap[i].length; j++) {

      if((i === 0 && j === 0) || (i === 0 && j === heightmap[i].length -1) || (i === heightmap.length -1 && j === 0) || (i === heightmap.length -1 && j === heightmap[i].length -1)) {
       
        cornerSide(i , j)
      } else if (i === 0) {
        topSide(i, j)
      } else if (i === heightmap.length -1) {
        bottomSide(i, j)
      } else if (j === 0 || j === heightmap[0].length -1){
        lateralSide(i, j)
      } else {
        centerSide(i, j)
      }
    }
  }
}

const lateralSide = (i, j) => {
  let incrementX = 1
  if (j === heightmap[0].length -1) incrementX = - 1

  if(heightmap[i][j] < heightmap[i + 1][j] && heightmap[i][j] < heightmap[i - 1][j]){
    if(heightmap[i][j] < heightmap[i][j + incrementX]){
      lowestPoints.push(heightmap[i][j])
    }
  } 

}

const cornerSide = (i, j) => {
  let incrementX = 1
  let incrementY = 1
  if(i === heightmap.length - 1 && j === heightmap[i].length - 1) {
    incrementY = -1
    incrementX = -1
  }

  if(i === 0 && j === heightmap[i].length - 1) incrementX = -1

  if(i === heightmap.length - 1 && j === 0) incrementY = -1

  if(heightmap[i][j] < heightmap[i + incrementY][j] && heightmap[i][j] < heightmap[i][j + incrementX]){
    lowestPoints.push(heightmap[i][j])
  } 
  
}


const centerSide = (i, j) => {
  if(heightmap[i][j] < heightmap[i - 1][j] && heightmap[i][j] < heightmap[i + 1][j]){
    if(heightmap[i][j] < heightmap[i][j - 1] && heightmap[i][j] < heightmap[i][j + 1]){
      lowestPoints.push(heightmap[i][j])
    }
  } 
}

const topSide = (i, j) => {
  if(heightmap[i][j] < heightmap[i + 1][j]){
    if(heightmap[i][j] < heightmap[i][j - 1] && heightmap[i][j] < heightmap[i][j + 1]){
      lowestPoints.push(heightmap[i][j])
    }
  } 
}

const bottomSide = (i, j) => {
  if(heightmap[i][j] < heightmap[i - 1][j]){
    if(heightmap[i][j] < heightmap[i][j - 1] && heightmap[i][j] < heightmap[i][j + 1]){
      lowestPoints.push(heightmap[i][j])
    }
  } 
}

const calculateSolution = (lowestPoints) => {
  return lowestPoints.reduce((acc, current) => acc + parseInt(current, 10) + 1, 0)
}