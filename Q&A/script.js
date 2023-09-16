// console.log('hello');

// const numbers = [1, 2, [45, 67, [12]]];

// function add(arr) {
//   let total = 0; // undefined  + 1 ; NaN

//   for (const item of arr) {
//     if (Array.isArray(item)) {
//       total += add(item);
//     } else {
//       total += item;
//     }
//   }
//   return total;
// }
// console.log(add(numbers));

// let value = 25;

// if (true) {
//   value = 24;
//   if (true) {
//     value = 21;
//   }
//   value = 55;
// }

// console.log(value);

// const value = [21, 2, 24, 25];
// //
// // const value = [ 24, 25];
// // 5 === 5 => true
// // 5  => true
// if (true) {
//   //
//   const arr = value;
//   if (true) {
//     arr.splice(0, 1);
//     if (false) {
//       arr.splice(0, 1);
//     }
//   }
//   value.splice(0, 1);
// }

// // console.log(value); // [] // [25, 24] // [24] // [25]
// // console.log(value); // [] // [24,25]
// console.log(value); // [] // [25, 24] // [24] // [25]
// [2, 24, 25]

// const value = [21, 2, 24, 25];
// // const value = [21];
// function fn(arr) {
//  arr = [...arr]
//  arr.splice(1, 1);
//  console.log(arr);
// }

// fn(value);
// fn(value);
// fn(value);
// console.log(value); // [21] [21, 24, 25]

// let total = 0;
// let value;
// do {
//   value = prompt("введіть число");
//   if (!isNaN(value)) {
//     total += Number(value);
//   }
// } while (value !== null);

// console.log(total);

// console.log(total);

// let total = 0;
// function ask() {
//   let value = prompt("введіть число");

//   if (value === null) {
//     return total;
//   }

//   if (!isNaN(value)) {
//     total += Number(value);
//   }
//   return ask();
// }
// console.log(ask());

// let total = 0;
// function ask() {
//   let value = prompt("введіть число");

//   if (value !== null) {
//     if (!isNaN(value)) {
//       total += Number(value);
//     }
//     total += ask();
//   }
//   return total;

// }
// console.log(ask());

// const obj = {
//   name: "User",
//   sayHello() {
//     console.log(this.name);
//   },
//   skills: {
//     js: true,
//   },
// };

// const copy = { ...obj };
// const copy = JSON.parse(JSON.stringify(obj))
// console.log(copy.skills === obj.skills);


