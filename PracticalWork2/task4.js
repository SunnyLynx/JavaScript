/*
Пользователь вводит цепочку чисел размера N. 
Вывести наибольшее число. 
*/

let string = prompt("Введите цепочку чисел размера N");

let arr = string.split(" ");
let max = Number(arr[0]);

for (let i = 1; i < arr.length; i++) {
  if (max < Number(arr[i])) {
    max = Number(arr[i]);
  }
}

alert(max);
