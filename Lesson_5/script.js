// ****************Об'єкт**************** \\
// const user = {
//     name: 'Alice',
//     skills: {
//         html: true,
//         css: true,
//         react: false
//     },
//     city:'Lviv'
// }
// console.log(user);

// ****************Звернення до властивостей об'єкта**************** \\

// console.log(user.name);
// console.log('css', user.skills.css);

// const objectKey = 'name';

// console.log(user[objectKey]);
// console.log(user['name']);
// console.log(user['skills']['react']);
// console.log(user.skills['react']);
// console.log(user['skills'].react);

// ****************Зміна значення властивості**************** \\
// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }

// user.city = 'Lviv';
// user['age'] = 28;
// console.log(user);
// // console.log(user.city);

// user.city = 'Odessa';
// user['age'] = 38;
// console.log(user);

// ****************Object.freeze**************** \\
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }

// const key = prompt('key')
// const value = prompt('value')
// user[key] = value
// user.key = value
// user.name = 'Kate'
// user['name'] = 'Den'
// console.log(user);
// Object.freeze(user.skills);
// user.name = 'Kate';
// user.city = 'Lviv';
// user.skills.html = true
// console.log(user);

// ****************Методи об'єкта**************** \\
// const user = {
//   name: "Alice",
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
//   sayHello(city) {
//     //   console.log(city);
//     //   console.log(this);
//     //   console.log(`Hello my name ${this.name}`);
//     // console.log(user.name);
//     console.log(this);
//     // console.log(this);
//   },
//   getAge(){
//     console.log(this);
//   }
// };
// user.sayHello();
// console.log('-----');
// user.getAge()
// // console.log(user.sayHello);
// const user2 = {
//     name: "Kate",
//     skills: {
//       html: false,
//       css: true,
//       react: false,
//     },
//     sayHello: user.sayHello,
// }

// user2.sayHello();
// ****************Цикл for...in**************** \\
// const userA = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
//     age: 30
// }

// const userB = Object.create(userA)
// userB.city = 'Lviv'
// console.log(userB);

// for(const key in userB){
//     if(userB.hasOwnProperty(key)){
//         console.log(key);
//     }
// }

// for(const key in userA){
//     console.log(key);
//     console.log(user[key]);
// }

// ****************Метод Object.keys()**************** \\
// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }
// const keys = Object.keys(user);
// console.log(keys);
// for(const key of keys){
//     console.log(key,user[key]);
// }
// console.log(keys);

// ****************Метод Object.values()**************** \\

// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }
// const values = Object.values(user);
// const values = Object.values(user.skills);
// console.log(values);

// ****************Метод Object.entries()**************** \\

// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }

// // const entries = Object.entries(user);
// const entries = Object.entries(user.skills);
// console.log(entries);

// ПЕРЕРВА ДО 20.45

// ****************Практика**************** \\
// Task - 1
// Створи функцію яка буде приймати 3 параметри та формувати об'єкт покупки
// 1 Назва продукту
// 2 Кількість одиниць
// 3 Ціна за 1 одиницю товару
// Функція має повертати сформований об'єкт з ключами name, price, quantity, totalPrice.

// function createBasket(product, quantity, price) {
// // const totalPrice = quantity * price;
// // const productObj = {
// //     name: product,
// //     quantity: quantity,
// //     price: price,
// //     totalPrice: totalPrice,
// // }

// // return productObj

// return {
//     name: product,
//     quantity, // quantity : 3
//     price,
//     totalPrice: quantity * price
// }
// }
// console.log(createBasket('pizza', 3, 120));
// console.log(createBasket('apple', 13, 1200));

// Task - 2
// Створи функцію для ведення статистики комп'ютерного клубу. Функція приймає 1 параметр це об'єкт користувачів де ключ це ім'я користувача, а значення це час оренди у хвилинах.
// Функція повертає рядок з інформацією про те скільки було користувачів та який середній час оренди комп'ютер.

// const players = {
//   Den: 60,
//   Kate: 130,
//   William: 45,
//   Matthew: 120,
//   Ethan: 40,
//   David: 55,
// };

// function getTime(obj) {
//   //   let totalPlayers = 0;
//   //   let totalTime = 0;

//   //   for (const key in obj) {
//   //     totalPlayers += 1;
//   //     totalTime += obj[key];
//   //   }

//   //   const average = totalTime / totalPlayers;

// //   const keys = Object.keys(obj);
// //   let totalTime = 0;

// //   for (const key of keys) {
// //     totalTime += obj[key];
// //   }

// // //   const average = totalTime / keys.length
// //   return `Count of players ${keys.length}, average time ${
// //     average
// //   }`;

//   //   const values = Object.values(obj);
//   //   let totalTime = 0;

//   //   for (const value of values) {
//   //     totalTime += value;
//   //   }

//   //   return `Count of players ${values.length}, average time ${
//   //     totalTime / values.length
//   //   }`;
// }

// console.log(getTime(players));

// Task - 3
// 1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є дана книга ("Harry Potter") \\\ "Anna, Oleksii"

// 2 Порахувати вік всіх юзерів у яких є ключ age.

// const friends = [
//   { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
//   { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
//   { name: "Alice", books: ["War and peace", "Romeo and Juliet"] },
//   {
//     name: "Oleksii",
//     books: ["Bible", "War and peace", "Harry Potter", "Romeo and Juliet"],
//     age: 26,
//   },
// ];

// function getTotalAge(arr) {
//   let totalAge = 0;
//   for (const reader of arr) {
//     // console.log(reader);
//     // if (reader.age) {
//     //   totalAge += reader.age;
//     // }
//     // console.log(reader.name, 'age' in reader);
//     // if('age' in reader){
//     //     totalAge += reader.age;
//     // }

//     console.log(reader.name, reader.hasOwnProperty("age"));
//     if (reader.hasOwnProperty("age")) {
//       totalAge += reader.age;
//     }
//   }
//   return totalAge;
// }
// console.log(getTotalAge(friends));
// function getUsers(arr, bookName) {
//   let readers = [];
//   for (const user of arr) {
//     if (user.books.includes(bookName)) {
//       readers.push(user.name);
//     }
//   }
//   console.log(readers);
//   return readers.join(", ");
// }
// console.log(getUsers(friends, "Harry Potter"));
// Task - 4
// 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати списoк імен учнів факультету
// 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати кількість очків факультету

// const hogvarts = {
//   griffindor: [
//     {
//       name: "Harry",
//       points: 17,
//     },
//     {
//       name: "Hermiona",
//       points: 19,
//     },
//     {
//       name: "Ron",
//       points: 14,
//     },
//   ],
//   slizerin: [
//     {
//       name: "Draco",
//       points: 17,
//     },
//     {
//       name: "Goyl",
//       points: 14,
//     },
//     {
//       name: "Crabbe",
//       points: 5,
//     },
//   ],
//   hasFaculty(faculty) {
//     return this.hasOwnProperty(faculty);
//   },
//   getUserList(faculty) {
//     // if (!(faculty in this)) {
//     //   return "Faculty not found 😰";
//     // }
//     if (!this.hasFaculty(faculty)) {
//       return "Faculty not found 😰";
//     }
//     const students = [];

//     for (const student of this[faculty]) {
//       students.push(student.name);
//     }

//     return students.join(", ");
//   },
//   getTotalPoints(faculty) {
//     // if (!this.hasOwnProperty(faculty)) {
//     //   return "Faculty not found 😰";
//     // }

//     if (!this.hasFaculty(faculty)) {
//       return "Faculty not found 😰";
//     }

//     let totalPoints = 0;

//     for (let i = 0; i < this[faculty].length; i += 1) {
//       totalPoints += this[faculty][i].points;
//     }

//     return totalPoints;
//   },
// };

// console.log(hogvarts.getUserList("griffindor"));
// console.log(hogvarts.getUserList("slizerin"));
// console.log(hogvarts.getUserList("slitherin"));

// console.log(hogvarts.getTotalPoints("griffindor"));
// console.log(hogvarts.getTotalPoints("slizerin"));
// console.log(hogvarts.getTotalPoints("slitherin"));
