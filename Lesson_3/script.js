// Що таке масив
// const array = ["Hello world", null, true, 15, [1,2,3]];

// Перевірка масиву
// console.log(typeof array); // object
// console.log(Array.isArray(array)); // true
// // console.log(Array.isArray([1,2,3]));
// console.log(Array.isArray({})) // false

// Перший та останій елемент масиву
// const firstEl = array[0];
// const lastIdx = array.length - 1;
// const lastEl = array[lastIdx];
// console.log(lastEl);

// Перебір масиву
const array = ["Hello world", null, true, 15];

// Цикл for
// for (let i = 0; i < array.length; i+=1){
//     // const item = array[i]
//     // console.log(item);
//     if(typeof array[i] === 'boolean'){
//         array[i] = 1;
//     }
// }

// console.log(array);

// Цикл for of
// for (let item of array) {
//   // console.log(item);
//   if (typeof item === "boolean") {
//     item = 1;
//   }
//   console.log(item);
// }
// console.log(array);

// Присвоєння за посиланням та за значенням

// Примітивні типи даних - за значенням

// let a = 1;
// let b = a;
// console.log('a', a);
// console.log('b', b);

// console.log(a === b);
// console.log('----------------------');

// a = 3;
// console.log('a', a);
// console.log('b', b);
// Складні типи даних - за посиланням

// let a = [1, 2, 3];
// let b = a;

// console.log("a", a);
// console.log("b", b);

// b[0] = 'c';
// console.log('a', a);
// console.log('b', b);

// console.log(a === b);
// console.log(a === [1, 2, 3]);
// console.log(b === [1, 2, 3]);

// console.log([1,2,3].toString() === [1,2,3].toString());

// console.log([1,2,3].toString());

// let a = [1, 2, 3];
// let b = Array.from(a);
// let c = [...a]
// let d = [].concat(a)

// console.log(d);
// b[0] = 'a'

// console.log('a', a);
// console.log('b', b);
// console.log('c', c);

// console.log(a === d);

// let word = 'Hello world';

// word[0] = 'F'

// console.log(word);

// const arr = [1, 2, 3];
// arr[0] = 'F'
// console.log(arr);

// Методи для роботи з масивом

// const numbers = [1, 2, 3, 4];

// push pop
// const length = numbers.push(5, 6, 7, 8, 9);
// console.log(numbers);
// console.log(length);

// const item = numbers.pop();
// console.log(numbers);
// console.log(item);

// unshift shift

// // const length = numbers.unshift('a', 'b');
// // console.log(numbers);
// // console.log(length);

// const item = numbers.shift()
// console.log(numbers);
// console.log(item);

// const numbers = [1, 2, 3, 4];

//slice
// const items = numbers.slice(88);

// console.log(items);

// splice
// const items = numbers.splice(1,2)
// console.log(numbers);
// console.log(items);

// const items = numbers.splice(1, 1 , 'a', 'b', 'c')
// console.log(numbers);
// console.log(items);

// const items = numbers.splice(2, 0 , 'a')
// console.log(numbers);
// console.log(items);

// const numbers = [1, 2, 3, 4];

// numbers.push(5)
// console.log(numbers);
// numbers.splice()

//includes
// const numbers = [1, 2, 3, 4];
// const result = numbers.includes(3)
// console.log(result);

// DOESN`T WORK
// const numbers = [[1], [2], [3]]
// const result = numbers.includes([2])

//indexOf
// const result = numbers.indexOf(5);
// console.log(result);

// concat

// const numbers = [1, 2, 3, 4];

// const result = numbers.concat([5,6], 7, 'abc')
// console.log(result);

// ПЕРЕРВА ДО 21.00

// Task-1
// Напиши скрипт який буде перебирати масив та видаляти з нього (мутувати) всі елементи що не є типом даних Number.

// const arr = [true, 3, "Hello", null, 42, false];

// for (let i = 0; i < arr.length; i += 1) {
//   if (typeof arr[i] !== "number") {
//     arr.splice(i, 1);
//     i -= 1;
//   }
// }
// console.log(arr);

// for (let i = arr.length - 1; i >= 0; i -= 1) {
//   if (typeof arr[i] !== "number") {
//     arr.splice(i, 1);
//   }
// }
// console.log(arr);
// console.log(typeof null);

// Task-2
// Потрібно створити функцію яка буде приймати 1 параметр
// Функція повина відібрати з масиву тільки ті елементи що дублюються в ньому та повернути їх в вигляді нового масиву як результат виконання функції

// function getCommonElements(arr) {
//   const result = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr.includes(arr[i], i + 1) && !result.includes(arr[i])) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }

// console.log(getCommonElements([1, 2, 3, 2, 2, 1, 17,19]));

// Task-3
//Потрібно створити функцію яка буде приймати 2 параметри
//1 параметр це масив всіх юзерів
//2 параметр це масив з чоловічими іменами.
//Функція повина відібрати з масиву всіх юзерів лише жіночі імена та повернути їх в результаті свого виканання.

// const users = [
//   "Artem",
//   "Anna",
//   "Larisa",
//   "Maksim",
//   "Svetlana",
//   "David",
//   "Roman",
//   "Olga",
// ];
// const men = ["Artem", "Maksim", "David", "Roman"];

// function getWomen(users, men) {
//   const women = [];

//   for (const user of users) {

//     if (men.includes(user)) {
//       continue;
//     }
//     women.push(user);

//     // if(!men.includes(user)){
//     //     women.push(user)
//     // }
//   }
//   return women
// }

// console.log(getWomen(users, men));

// Task-4 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок літер) і виводить його в консоль.

// const string = 'Welcome to the future';

// const result = string.split('').reverse().join('');
// console.log(result);

// Task-5
// Напиши скрипт який буде перевіряти чи елементи в масиві розташовані в порядку зростання,
// якщо ні то замінювати елементи на вірнi
// const numbers = [1, 2, 3, 1, 5, 6, 1, 1, 9];
// const numbers = [11, 2, 3, 1, 55, 6, 1, 71, 9];

// for(let i = 1; i < numbers.length; i+=1){
//     const currentEl = numbers[i];
//     const prevEl= numbers[i - 1]

//     if(prevEl >= currentEl){
//         numbers[i] = prevEl + 1
//     }
// }

// console.log(numbers);

// Task-6
// Напиши функцію яка на основі масиву користувачів що поставили лайк формує та повертає рядок.
// Функцію має повернути текст, як вказано у прикладах:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// function createStr(arr = []) {
//   let message;

// //   if(!Array.isArray(arr)){
// //     return 'GIVE ME ARRAY "😈"';
// //   }

//   switch (arr.length) {
//     case 0:
//       message = "no one likes this";
//       break;
//     case 1:
//       message = `${arr[0]} likes this`;
//       break;
//     case 2:
//       message = `${arr[0]} and ${arr[1]} like this`;
//       break;
//     case 3:
//       message = `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
//       break;
//     default:
//       message = `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
//   }

//   return message;
// }
// console.log(createStr());
// console.log(createStr([]));
// console.log(createStr(["Peter"]));
// console.log(createStr(["Jacob", "Alex"]));
// console.log(createStr(["Max", "John", "Mark"]));
// console.log(createStr(["Mark", "Alex", "Jacob", "Mark"]));

