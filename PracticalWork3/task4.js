/*
9. Дана квадратная матрица. Организовать вывод горизонтальной «змейкой» начиная с
правого верхнего угла.
*/

let matrix = [[3, 2, 0], 
              [7, 8, 2],   
              [6, 4, 9]];
let stringRes = "";

for (let i = 0; i < matrix.length; i++) {
  for (let j = matrix.length -1; j >= 0; j--) {

    if (i%2 == 1){
      matrix[i].reverse()
    }
    stringRes += matrix[i][j] + ", ";
  }
  console.log(stringRes);
  stringRes = "";
}
console.log("______________________________")

/*
10. Дана квадратная матрица. Организовать вывод горизонтальной «змейкой» с нижнего
левого угла.
*/

let matrix2 = [[3, 2, 0], 
               [7, 8, 2],   
               [6, 4, 9]];
stringRes = "";

for (let i = matrix2.length -1; i >= 0; i--) {

  if (i%2 == 0) {
    for (let j = 0; j < matrix2.length; j++) {
      stringRes += matrix2[i][j] + ", ";
    }
    console.log(stringRes);
    stringRes = "";

  } else if (i%2 == 1) {
    for (let j = matrix2.length -1; j >= 0; j--) {
      stringRes += matrix2[i][j] + ", ";
    }
  console.log(stringRes);
  stringRes = "";
  }
}
console.log("______________________________");
