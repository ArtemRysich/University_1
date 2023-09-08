/***** Інструкція if та її варіації *****/
// const value = 11;

// if (value === 10) {
//   console.log("condition is true 😎");
// }

// const str = 'Hello world'

// if(str.includes('world ')){
//     console.log("condition is true 😎");
// }

// 0
// ''
// NaN
// null
// undefined
// false
// const value = 0;
// if (value) {
//   console.log("condition is true 😎");
// }

// str.includes('world') => //false // true

// const value = 11;
// if (value === 10) {
//   console.log("condition is true 😎");
// } else {
//   console.log("condition is false 😱");
// }

// console.log("after");
// // win + v
// const value = 11;
// if (value === 9) {
//   console.log("condition is true 😎 VALUE 9");
// } else if (value === 10) {
//   console.log("condition is true 😎 VALUE 10");
// } else if (value === 11) {
//   console.log("condition is true 😎 VALUE 11");
// } else {
//   console.log("condition is FALSE 😨");
// }

/***** Інструкція switch *****/
// const str = "world";

// switch (str) {
//   case "world":
//     console.log("case 1");

//   case "hello world":
//     console.log("case 2");
//     break;
//   case "hello":
//     console.log("case 3");

//   default:
//     console.log("default");
// }

// ДУЖЕ ПОГАНИЙ ПРИКЛАД!!!!!
// const str = "hello";

// switch (true) {
//   case "world" > str: // false true  === true
//     console.log("case 1");
//     break;
//   case "hello world" < str:
//     console.log("case 2");
//     break;
//   case "hello" === str:
//     console.log("case 3");
//     break;
//   default:
//     console.log("default");
// }

/***** Тернарний оператор *****/

// condition ? true : false

// const value = 14;
// const message = value > 10 && value < 20 ? "CONDITION TRUE" : "CONDITION FALSE";

// const value = 15;
// let message;

// if (value > 10 && value < 20) {
//   message = "CONDITION TRUE";
// } else {
//   message = "CONDITION FALSE";
// }

// console.log(message);

// const value = 15;
// let message = "CONDITION FALSE";

// if (value > 10 && value < 20) {
//   message = "CONDITION TRUE";
// }

// console.log(message);

/***** Області видимості *****/ //(Обов'язково !!!)

// Глобальна та локальна
// const
// let
// 'use strict'
// const value = 10;

// if (true) {
//   const value = 15;
//   if (true) {
//     console.log("local", value);
//   }
// }

// console.log("global", value);

// function fn(){

// }

// let number = 10;

// if (true) {
//     number = 22;
// }
// console.log(number);

// let number = 10;

// if (true) {
//     number = 22;
//     if (true) {
//         number = 35;
//     }
// }
// console.log(number);

// let number = 10;

// if (true) {
//     let number = 22;
//     if (true) {
//         number = 35;
//     }
// }
// console.log(number);

// let number = 10;

// if (true) {
//     if (true) {
//         number = 35;
//     }
// let number = 22;
// }
// console.log(number);

//  Глобальна та функціональна

// if(true){
//     let value = 15
// }
// console.log(value);

// if(true){
//     var value = 15
// }
// console.log(value);

// function fn(){
//     var value = 15
// }
// console.log(value);

/***** Цикл for *****/

// for (initialization; condition; post-expression) {
//   // statements
// }
// let message = ''
// for(let i = 0; i < 10; i+=1){
//     message += 'a'
//     console.log(message);
// }

// const str = "hello world";

// for(let i = 0; i < str.length; i+=1 ){
//     console.log(str[i]);
// }

/***** Цикл while *****/
// let i = 0;
// const str = "hello world";
// while (i < str.length) {
//   console.log(str[i]);
//   i += 1;
// }

/***** Цикл do while *****/
// let i = 10;
// do {
//   i += 1;
//   console.log(i);
// } while (i < 5);

// while(i < 5){
//     i +=1;
//     console.log(i);
// }

// **************************************** Практика ****************************** //

// Task - 1
// Потрібно створити світлофор використовуючи конструкцію switch
// В propmt() юзер вводить колір який він бачить на світлофорі
// В результаті виконання юзер має отримати повідомлення з дією яку має виконати

// Можливі 4 стани світлофора
// 1 - red, action stop
// 2 - yellow, action ready
// 3 - green, action go
// 4 - Будь-який інший колір або значення відповідно світлофор не працює, action be careful

// if (message) {
//   message = message.toLowerCase();
// }

// let message = prompt("color ?");
// let action;

// message = message && message.toLowerCase();

// switch (message) {
//   case "red":
//     action = "stop";
//     break;
//   case "yellow":
//     action = "ready";
//     break;
//   case "green":
//     action = "go";
//     break;
//   default:
//     action = "be careful";
// }
// console.log(action);

// Task - 2
// Потрібно створити застосунок для автоматизації перевірки правильних відповідей на дитячі загадки
// Створи функцію яка буде приймати 2 параметри
// 1 параметр це текст загадки
// 2 вірна відповідь

// Після виклику функції користувач має побачити питання на екрані та поле для вводу відповіді, використовуй propmt()
// Функція має повертати булеве значення з результатом відповіді (true/false)

// function check(text, answer) {
//   let message = prompt(text);
//   message = message && message.toLowerCase().trim();

//   return message === answer; // true false
// }

// console.log(
//   check("Хоч не літак, а крилатий, Без крил не може працювати.", "вітряк")
// );
// console.log(check('Через воду він проводить, А сам з місця вік не сходить', 'міст'));
// Тестові дані
// Хоч не літак, а крилатий,
// Без крил не може працювати.
// (Вітряк)

// Через воду він проводить,
// А сам з місця вік не сходить.
// (Міст)

// Task - 3
// Потрібно створити функцію яка буде рахувати за скільки днів Равлик зможе виповзти з колодязя
// функція приймає 1 параметр глибину колодязя, функція повертає кількість днів яку равлик витратив на шлях.
// за день Равлик проповзає на 7 м в гору, а за ніч опускається на 2 м в низ
// для вирішення завдання використовуй цикл while

// 42 м, виповзе за 8 днів
// 17 м, виповзе за 3 дні
// 18 м, виповзе за 4 дні

function getDays(deps) {
  const daySpeed = 7;
  const nightSpeed = 2;
  let total = 0;
  let days = 0;

  while (total < deps) {
    total += daySpeed;
    days += 1;

    if(total < deps){
        total -= nightSpeed;
    }
  }
  console.log(days);
}
// getDays(42); // 8
// getDays(17); // 3
// getDays(18); // 4

// Task - 4
// Порахуй скільки голосних літер у реченні.

function countVowel(str = "") {
  const vowels = "aeiou";
  let counter = 0;

  str = str.toLowerCase();

  for (let i = 0; i < str.length; i += 1) {
    if (vowels.includes(str[i])) {
      counter += 1;
    }
    // counter += vowels.includes(str[i]) ? 1 : 0
    // counter = vowels.includes(str[i]) ? counter + 1 : counter
  }
  return counter
}
console.log(countVowel("HELLO WORLD")); // 3
// console.log(countVowel("Junior Web Developer")) // 8
