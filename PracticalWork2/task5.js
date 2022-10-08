/*
Пользователь вводит цепочку чисел размера N. 
Вывести наименьшее число. 
*/

let string = prompt("Введите цепочку чисел размера N");

let arr = string.split(" ").map(s => Number(s));

min = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < arr[i-1]) {
    min = arr[i];
  }
}

alert(min);