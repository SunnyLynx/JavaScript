/*
Пользователь вводит числа A и N. 
Организовать автоматическое вычисление по формуле: 1 + A + A^2 + A^3 + … + A^N
*/

let a = prompt("Введите числo A");
let n = prompt("Введите число N");
let res = 0;

for (let i = 0; i <= n; i++) {
  res += Math.pow(a, i);
}

alert(res);
