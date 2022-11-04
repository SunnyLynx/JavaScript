/*
7. Дана квадратная матрица размеров N. Обнулить элементы главной диагонали.
*/

let n = 3;
let matrix = [[3, 2, 0], 
              [7, 8, 2],   
              [6, 4, 9]];
let stringRes = "";

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {

    if (i == j) {
      matrix[i][j] = 0;
    }
    stringRes += matrix[i][j] + ", ";
  }
  console.log(stringRes);
  stringRes = "";
}

console.log("______________________________")

/*
8. Дана квадратная матрица размеров N. Посчитать сумму побочной диагонали.
*/

// вариант 1

matrix = [[3, 2, 0], 
          [7, 8, 2],   
          [6, 4, 9]];
let sum = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {

    if (i == n-j-1) {
      sum += matrix[i][j];
    }
  }
}
console.log(sum);

console.log("______________________________")

// вариант 2

let matrix2 = [[3, 2, 0], 
               [7, 8, 2],   
               [6, 4, 9]];
let sum2 = 0;

for (let i = 0; i < n; i++) {
  matrix2[i].reverse();
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {

    if (i == j) {
      sum2 += matrix2[i][j];
    }
  }
}
console.log(sum2);

console.log("______________________________")
