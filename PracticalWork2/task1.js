/*
Пользователь вводит число N. Организовать автоматическое
вычисление по формуле: 1/Math.sqrt(2) + 1/Math.sqrt(3) + ... +  1/Math.sqrt(n)
*/

let n = prompt("Введите число N");
let result = 0;


for (let i = 2; i <= n; i++) {
  result += 1/Math.sqrt(i);
}

alert(result);