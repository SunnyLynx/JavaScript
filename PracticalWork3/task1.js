/*
1. Дана матрица размера M, N. Посчитать количество нулей в массиве.
*/

let m = 3;
let n = 4;
let matrix = [[-3, 2, 0, -1], 
              [0, -8, 2, 0],   
              [-6, 0, -2, 9]];

function countZeroInMatrix (matrix) {
  let count = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {

      if (matrix[i][j] == 0) {
        count++;
      }
    }
  }
  return count;
}

alert(countZeroInMatrix (matrix));

/*
2. Дана матрица размера M, N. Посчитать количество нулей в каждой строке в массиве.
*/

function countZeroInString (matrix) {
  let count = 0;
  let arrCount = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {

      if (matrix[i][j] == 0) {
        count++;
      }
    }
    arrCount.push(count);
    count = 0;
  }
  return arrCount;
}

alert(countZeroInString (matrix));

/*
3. Дана матрица размера M, N. Посчитать количество отрицательных элементов в каждом
столбце массива.
*/

function countInColumn (matrix) {
  let count = 0;
  let arrCount = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {

      if (matrix[j][i] < 0) {
        count++;
      }
    }
    arrCount.push(count);
    count = 0;
  }
  return arrCount;
}

alert(countInColumn (matrix));
