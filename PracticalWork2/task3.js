/*
Пользователь вводит цепочку чисел размера N. 
Посчитать количество чисел меньше 5. 
*/

let string = prompt ("Введите цепочку чисел размера N");
let count = 0;

let arr = string.split(" ");

for (let i = 0; i < arr.length; i++) {
  if (Number(arr[i]) < 5) {
    count++
  }
}

alert(count);