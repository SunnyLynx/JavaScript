/*
Вывести цепочку чисел от А до B. (А должна быть больше B).
*/

let b = prompt ("Введите число B");
let a = prompt ("Введите число А. (А должнo быть больше B)");
let str = "";
debugger
for (let i = a; i >= b; i--) {
  str += i + " ";
}

alert(str);
