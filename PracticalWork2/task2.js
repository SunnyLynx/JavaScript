/*
Пользователь вводит цепочку чисел размера N. 
Посчитать количество положительных чисел. 
*/

let string = prompt ("Введите цепочку чисел размера N");
let count = 0;

let arr = string.split([" "]);

for ( let i = 0; i < arr.length; i++) {
  if (Number(arr[i]) > 0) {
    count++;
  }
}

alert(count);
