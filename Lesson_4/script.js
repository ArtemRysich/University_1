// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT
// Function expression
// const valC = 15;

// const add = function (valA, valB) {
//   //   const valA = 19;
//   valA = 15;
//   console.log("valA", valA);
//   const sum = valA + valB;
//   return sum;
//   // return valA + valB
// };
// // console.log(sum);
// console.log(add(12, 15));
// console.log(add(152, 153));

// const result = add(12, 15);

// var add = function (valA, valB) {
//   const sum = valA + valB;
//   return sum;

// };

// console.log(result);

// Function declaration
// hoisting https://codeguida.com/post/199

// function add(valA, valB) {
//     const sum = valA + valB;
//     return sum;
// }
// console.log(add(32,44)); // add(32,44) => 76 => console.log(76)

// Псевдомасив arguments
// const arr = [1,2,3];
// console.log(arr);
// function getSum() {
//     // console.log(arguments);
// // const copy = Array.from(arguments);
// // const copy = [...arguments]

// // console.log(copy);
// //   console.log("valA", valA);
// //   console.log("valB", valB);
// //   console.log("valC", valC);

// let total = 0;

// // for(const item of arguments){
// //     console.log(item);
// //     total += item;
// // }
// for(let i = 0; i < arguments.length; i+=1){
//     console.log(arguments[i]);
//     total += arguments[i];
// }

// console.log(total);
// }
// getSum(1, 2, 3, 4, 5);

// function getSum(...args) {
// console.log(args);
// }
// getSum(1, 2, 3, 4, 5);

// Області видимості, присвоєння за посиланням та значенням

// // Example 1
// let someValue = 4;

// if (true) {
//     someValue = 11;
// }

// console.log(someValue);

// // Example 2
// let someValue = 4;

// if (true) {
//     let someValue = 11;
// }

// console.log(someValue);

//// Example 3
// let someValue = 4;

// if (true) {
//     if (true) {
//         someValue = 24;
//     }
//     let someValue = 11;
// }

// console.log(someValue);

// // Example 4
// let someValue = 2;

// function checkScope(someValue) { // let someValue = 2
//     someValue = 45;
//     return someValue;
// }

// checkScope(someValue)

// console.log(someValue);

// Example 5
// let someValue = 2;

// function checkScope() {
//     someValue = 45;
//     return someValue;
// }

// checkScope(someValue)

// console.log(someValue);

// // Example 6
// let someValue = 2;

// function checkScope() {
//     someValue = 42;
//     return someValue;
// }

// checkScope()

// console.log(someValue);

// Example 7
// let someArray = ['Hello', 'my', 'name', 'scope'];

// function checkScope(arr) {
//     arr.splice(0,3)
// }

// checkScope(someArray)

// console.log(someArray);
// Початковий - true
// Мутований - false

// let someArray = ['Hello', 'my', 'name', 'scope'];

// function checkScope(arr) {
//     arr = Array.from(arr);
//     arr.splice(0,3);
// }

// checkScope(someArray)

// let someArray =1;

// function checkScope(arr) {
//     console.log(arr);
//     // arr = Array.from(arr);
//     // arr.splice(0,3);
// }

// checkScope(someArray)

// console.log(someArray);
// Початковий - true
// Мутований - false

// Перерва до  20.55

// Практика

// Task-1;
// Створи функцію яка буде перевіряти чи кожен елемент масиву більше ніж вказане значення. Функція приймає два параметри.
// 1 - Масив чисел
// 2 - Число яке потрібно порівнювати з усіма елементами масиву.
// Функція повертає повідомлення про успішну або не успішну перевірку (повідомлення "Success ✅" "Fail ❌")

// const numbers = [25, 12, 67, 40, 18];

// function checkValue(arr, target) {
//   //   let message = "Success ✅";

//   //   for (const num of arr) {
//   //     if (num < target) {
//   //       message = "Fail ❌";
//   //       break;
//   //     }
//   //   }
//   //   return message

//   for (const num of arr) {
//     if (target > num) {
//       return "Fail ❌";
//     }
//   }

//   return "Success ✅";
// }

// console.log(checkValue(numbers, 10));
// console.log(checkValue(numbers, 13));

// Застосування функції + патерн раннє повернення

// const numbers = [25, 12, 67, 40, 18];

// function checkValue(arr, target) {
//
// }

// console.log(checkValue(numbers, 10));
// console.log(checkValue(numbers, 13));

// Task-2
// Створити функцію яка буде розбивати початковий масив на потрібну кількість елементів розділюячи на декілька масивів.Функція приймає 2 параметри
// 1 - масив значень
// 2 - потрібну кількість елементіа в масиві
//  Функція повертає масив масивів

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function getCombination(arr, count) {
//   const result = [];

//   for (let i = 0; i < arr.length; i += count) {
//     const combinations = arr.slice(i, i + count);
//     if (combinations.length === count) {
//       result.push(combinations);
//     }

//     // result.push(arr.slice(i, i + count))
//   }

//   return result;
// }
// console.log(getCombination(data, 2)); // [[1, 2], [3, 4],[5, 6],[7, 8]]
// console.log(getCombination(data, 4)); // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// Example 3 - Площа прямокутника
// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких будуть передані до параметра dimensions у вигляді рядка. Значення гарантовано розділені пробілом.

// function getRectArea(dimensions) {
//   const arr = dimensions.split(" ");
//   // const firstValue = Number(arr[0])
//   // const secondValue = Number(arr[1])

//   // return secondValue * firstValue

//   // return Number(arr[0]) * Number(arr[1])
// }

// console.log(getRectArea("8 11"));
// console.log(getRectArea("15 11"));

// Task-4
// Напишіть функції для роботи з колекцією навчальних курсів courses:

// addCourse(name) - додає курс до кінця колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName) - змінює ім'я на нове

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];
// function addCourse(name) {
//   //   if (!courses.includes(name)) {
//   //     courses.push(name);
//   //   } else {
//   //     alert("Ви вже маєте такий курс");
//   //   }

// //   if (!courses.includes(name)) {
// //     courses.push(name);
// //     return;
// //   }
// //   alert("Ви вже маєте такий курс");
// }

// addCourse("Express");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// console.log(addCourse("CSS")); // 'Ви вже маєте такий курс'
// console.log(courses);

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];
// function removeCourse(name) {
// idx indexOf
// includes

//   if (courses.includes(name)) {
//     const idx = courses.indexOf(name);
//     courses.splice(idx, 1);
//   }

//   const idx = courses.indexOf(name);

//   if (idx !== -1) {
//     courses.splice(idx, 1);
//   }

//   const idx = courses.indexOf(name);

//   if (!!~idx) {
//     courses.splice(idx, 1);
//   }

// -(x+1);
// 0 => false
// -1 => true

//   console.log(!!-(0 + 1));
//   console.log(!!-(-1 + 1)); // -0
//   console.log("--------");
//   console.log(!!5);
//   console.log(Boolean(5));
// }
// removeCourse("React");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// console.log(removeCourse("Vue")); // 'Курс із таким ім'ям не знайдено'

// const courses = ["HTML", "CSS", "Express", "JavaScript", "React", "PostgreSQL"];
// function updateCourse(oldName, newName) {
//   const idx = courses.indexOf(oldName);

//   if (!!~idx) { // includes
//     courses[idx] = newName;
//   }
//   console.log(Boolean(~-1));
// //   !! приводимо до Boolean
// //    ~  -(x+1) конвертуємо до вірного буля

// course[idx] ?? (course[idx] = newname)// буде працювати?

// // !!~idx && (courses[idx] = newName);

// // courses[idx] = !!~idx ? newName : oldName

// }

// updateCourse("HTML", "NestJS");
// console.log(updateCourse("qwerty", "NestJS"));
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']


// console.log(courses.length);// властивість
// console.log(courses.push());// метод


console.log(~~'rq');
console.log(Number('rq'));
console.log(+'rq');