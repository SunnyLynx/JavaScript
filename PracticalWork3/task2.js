/*
4. Дана квадратная матрица, вывести значения элементов в обратном порядке.
*/

let n = 3;
let matrix = [[3, 2, 0], 
              [7, 8, 2],   
              [6, 4, 9]];
let arrRes = [];

// вариант 1

for (let i = n-1; i >= 0; i--) {
  for (let j = n-1; j >= 0; j--) {

    arrRes += matrix[i][j];
  }
  console.log(arrRes);
  arrRes = [];
}

// вариант 2

for (let i = n-1; i>=0; i--) {
  let res = matrix[i].reverse();
  console.log(res);
}

console.log("______________________________")

/*
5. Дана квадратная матрица, вывести значения элементов с поворотом на 90 градусов по
часовой стрелке.
*/

let matrix2 = [[3, 2, 0], 
               [7, 8, 2],   
               [6, 4, 9]];

let stringRes = "";

for (let j = 0; j < n; j++) {
  for (let i = n-1; i >= 0; i--) {

    stringRes += matrix2[i][j] + ", ";
  }
  console.log(stringRes);
  stringRes = "";
}
console.log("______________________________");

/*
6. Дана квадратная матрица, вывести значения элементов с поворотом на 90 градусов
против часовой стрелки.
*/

let matrix3 = [[3, 2, 0], 
               [7, 8, 2],   
               [6, 4, 9]];

let stringResult = "";

for (let j = n-1; j >= 0; j--) {
  for (let i = 0; i < n; i++) {

    stringResult += matrix2[i][j] + ", ";
  }
  console.log(stringResult);
  stringResult = "";
}
console.log("______________________________");